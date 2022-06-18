import { useNavigate } from 'react-router-dom'
import ProductForm from '../components/ProductForm/ProductForm'

function FormProductPage() {
  const navigate = useNavigate()
  const handleOnClick = () => {
    navigate('dashboard')
  }

  return (
    <div className="form-product-page-container">
      <ProductForm />
      <button type="button" onClick={handleOnClick}>
        Ir al dashboard
      </button>
    </div>
  )
}

export default FormProductPage
