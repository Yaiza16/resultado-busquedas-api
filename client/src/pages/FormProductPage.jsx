import { useNavigate } from 'react-router-dom'
import ProductForm from '../components/ProductForm/ProductForm'

function FormProductPage() {
  const navigate = useNavigate()
  const handleOnClick = () => {
    navigate('dashboard')
  }

  return (
    <div className="form-product-page-container">
      <h1>Upload your product</h1>
      <ProductForm />
      <button type="button" onClick={handleOnClick}>
        Go to dashboard
      </button>
    </div>
  )
}

export default FormProductPage
