import { Routes, Route } from 'react-router'

import Home from '../pages/home/home'
import Error from '../pages/error/error'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default AppRouter
