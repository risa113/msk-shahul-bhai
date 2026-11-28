import { useEffect, useRef, useState } from 'react'

export type InViewState = 'ssr' | 'waiting' | 'visible'

interface UseRepeatInViewOptions {
  /** Keep visible once revealed instead of resetting off-screen (default: false) */
  once?: boolean
  /** Fraction of element required to trigger reveal when small (default: 0.1) */
  threshold?: number
  /** Viewport margin for early/late entry trigger (default: '0px 0px -6% 0px') */
  rootMargin?: string
  /** Visible pixel height threshold for tall sections (default: 72) */
  minIntersectHeight?: number
  /** Skip observer and keep visible immediately */
  disabled?: boolean
}

type ObserverEntryHandler = (entry: IntersectionObserverEntry) => void

interface PooledObserver {
  observer: IntersectionObserver
  handlers: Map<Element, ObserverEntryHandler>
}

const observerPool = new Map<string, PooledObserver>()

function getPooledObserver(threshold: number, rootMargin: string): PooledObserver {
  const key = `${threshold}|${rootMargin}`
  const existing = observerPool.get(key)
  if (existing) return existing

  const handlers = new Map<Element, ObserverEntryHandler>()
  const thresholds = threshold > 0 ? [0, threshold] : [0]

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const handler = handlers.get(entry.target)
        if (handler) handler(entry)
      }
    },
    { threshold: thresholds, rootMargin }
  )

  const poolEntry: PooledObserver = { observer, handlers }
  observerPool.set(key, poolEntry)
  return poolEntry
}

function subscribeElement(
  el: Element,
  threshold: number,
  rootMargin: string,
  handler: ObserverEntryHandler
): () => void {
  const { observer, handlers } = getPooledObserver(threshold, rootMargin)
  handlers.set(el, handler)
  observer.observe(el)

  return () => {
    handlers.delete(el)
    observer.unobserve(el)
    if (handlers.size === 0) {
      observer.disconnect()
      observerPool.delete(`${threshold}|${rootMargin}`)
    }
  }
}

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Repeatable Intersection Observer hook with SSR visibility, pooled native observers,
 * hysteresis entry/exit thresholds to prevent flickering, and reduced-motion safety.
 */
export function useRepeatInView<T extends HTMLElement = HTMLDivElement>(
  options: UseRepeatInViewOptions = {}
) {
  const {
    once = false,
    threshold = 0.08,
    rootMargin = '0px 0px -2% 0px',
    minIntersectHeight = 48,
    disabled = false,
  } = options

  const ref = useRef<T | null>(null)
  const [state, setState] = useState<InViewState>('ssr')

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (disabled || prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      setState('visible')
      return
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMotionPrefChange = (event: MediaQueryListEvent) => {
      if (event.matches) setState('visible')
    }
    mediaQuery.addEventListener?.('change', onMotionPrefChange)

    const rect = el.getBoundingClientRect()
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    const initiallyVisible = rect.bottom > 0 && rect.top < viewportHeight * 0.96

    setState(initiallyVisible ? 'visible' : 'waiting')

    let hasRevealedOnce = initiallyVisible

    const unsubscribe = subscribeElement(el, threshold, rootMargin, (entry) => {
      if (mediaQuery.matches) {
        setState('visible')
        return
      }

      const targetHeight = entry.boundingClientRect.height
      const smallTargetRatio = targetHeight <= 140 ? Math.max(threshold, 0.08) : threshold
      const isEntering =
        entry.isIntersecting &&
        (entry.intersectionRatio >= smallTargetRatio ||
          entry.intersectionRect.height >= minIntersectHeight ||
          targetHeight === 0)

      if (isEntering) {
        hasRevealedOnce = true
        setState('visible')
        if (once) unsubscribe()
      } else if (!entry.isIntersecting && !once) {
        hasRevealedOnce = false
        setState('waiting')
      } else if (once && hasRevealedOnce) {
        setState('visible')
      }
    })

    return () => {
      unsubscribe()
      mediaQuery.removeEventListener?.('change', onMotionPrefChange)
    }
  }, [once, threshold, rootMargin, minIntersectHeight, disabled])

  return {
    ref,
    state,
    isVisible: state === 'visible' || state === 'ssr',
  }
}

