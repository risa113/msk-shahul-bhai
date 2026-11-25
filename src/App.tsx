import { lazy, Suspense } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'

const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })))
const MenuPage = lazy(() => import('./pages/MenuPage').then((m) => ({ default: m.MenuPage })))
const SignaturePage = lazy(() =>
  import('./pages/SignaturePage').then((m) => ({ default: m.SignaturePage }))
)
const CateringPage = lazy(() =>
  import('./pages/CateringPage').then((m) => ({ default: m.CateringPage }))
)
const AboutVisitPage = lazy(() =>
  import('./pages/AboutVisitPage').then((m) => ({ default: m.AboutVisitPage }))
)
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
)

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.26, ease: 'easeOut' }}
        >
          <Suspense
            fallback={
              <div
                className="flex min-h-[60vh] items-center justify-center bg-cream font-serif text-xl text-brand-primary"
                role="status"
              >
                Preparing MSK Sahul Bhai Biryani…
              </div>
            }
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/signature" element={<SignaturePage />} />
              <Route path="/special-dishes" element={<Navigate to="/signature" replace />} />
              <Route path="/catering" element={<CateringPage />} />
              <Route path="/about" element={<AboutVisitPage />} />
              <Route path="/visit" element={<Navigate to="/about" replace />} />
              <Route path="/contact" element={<Navigate to="/about" replace />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AnimatedRoutes />
      </BrowserRouter>
    </MotionConfig>
  )
}

export default App
