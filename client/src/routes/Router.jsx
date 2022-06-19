import { Route, Routes } from 'react-router-dom'
import { DashboardPage, FormProductPage } from '../pages'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<FormProductPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  )
}

export default Router
