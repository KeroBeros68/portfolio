import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'

import AppRouter from './router/router.jsx'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <main className="flex-1 p-4">
        <AppRouter />
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
