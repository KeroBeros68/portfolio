import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'

import AppRouter from './router/router.jsx'
import Header from './components/header/header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  </StrictMode>,
)
