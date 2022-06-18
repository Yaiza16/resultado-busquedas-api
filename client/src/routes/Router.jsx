import { Route, Routes } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage'
import FormProductPage from '../pages/FormProductPage'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<FormProductPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  )
}

export default Router
