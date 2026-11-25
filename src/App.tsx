import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutVisitPage } from './pages/AboutVisitPage'
import { CateringPage } from './pages/CateringPage'
import { HomePage } from './pages/HomePage'
import { MandiSpecialsPage } from './pages/MandiSpecialsPage'
import { MenuPage } from './pages/MenuPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { SignaturePage } from './pages/SignaturePage'
import { WeddingCateringPage } from './pages/WeddingCateringPage'

export function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/" element={<MenuPage />} />
        <Route path="/menu/mandi" element={<MandiSpecialsPage />} />
        <Route path="/menu/mandi/" element={<MandiSpecialsPage />} />
        <Route path="/signature" element={<SignaturePage />} />
        <Route path="/signature/" element={<SignaturePage />} />
        <Route path="/special-dishes" element={<Navigate to="/signature/" replace />} />
        <Route path="/special-dishes/" element={<Navigate to="/signature/" replace />} />
        <Route path="/catering" element={<CateringPage />} />
        <Route path="/catering/" element={<CateringPage />} />
        <Route path="/wedding-catering" element={<WeddingCateringPage />} />
        <Route path="/wedding-catering/" element={<WeddingCateringPage />} />
        <Route path="/about" element={<AboutVisitPage />} />
        <Route path="/about/" element={<AboutVisitPage />} />
        <Route path="/visit" element={<Navigate to="/about/" replace />} />
        <Route path="/visit/" element={<Navigate to="/about/" replace />} />
        <Route path="/contact" element={<Navigate to="/about/" replace />} />
        <Route path="/contact/" element={<Navigate to="/about/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
