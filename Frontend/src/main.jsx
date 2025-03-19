import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'

import AppRouter from './router/router.jsx'
import Navbar from './components/navbar/navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  </StrictMode>,
)
