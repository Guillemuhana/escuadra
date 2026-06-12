import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect, createContext, useContext } from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import QuoteWizard from './components/QuoteWizard'
import ChatBubble from './components/ChatBubble'
import HomePage from './pages/HomePage'
import ResidentialPage from './pages/ResidentialPage'
import CommercialPage from './pages/CommercialPage'
import ProjectManagementPage from './pages/ProjectManagementPage'
import ServicePage from './pages/ServicePage'

export const QuoteContext = createContext(() => {})
export const useQuote = () => useContext(QuoteContext)

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false)
  const openQuote = () => setQuoteOpen(true)

  return (
    <QuoteContext.Provider value={openQuote}>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/residential" element={<ResidentialPage />} />
        <Route path="/commercial" element={<CommercialPage />} />
        <Route path="/project-management" element={<ProjectManagementPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>
      <Footer />
      <ChatBubble />
      <AnimatePresence>
        {quoteOpen && <QuoteWizard onClose={() => setQuoteOpen(false)} />}
      </AnimatePresence>
    </QuoteContext.Provider>
  )
}
