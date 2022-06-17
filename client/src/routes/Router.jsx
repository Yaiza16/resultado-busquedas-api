import { Route, Routes } from 'react-router-dom'
import FormProductPage from '../pages/FormProductPage'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<FormProductPage />} />
    </Routes>
  )
}

export default Router
