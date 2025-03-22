import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { ParallaxProvider } from 'react-scroll-parallax'
import './index.css'

import AppRouter from './router/router.jsx'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ParallaxProvider>
        <Header />
        <main className="flex-1">
          <AppRouter />
        </main>
        <Footer />
      </ParallaxProvider>
    </BrowserRouter>
  </StrictMode>,
)
