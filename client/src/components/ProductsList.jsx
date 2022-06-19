import PropTypes from 'prop-types'
import { ProductItem } from '.'

function ProductsList({ products }) {
  return (
    <div className="products-list-container">
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  )
}

ProductsList.propTypes = {
  products: PropTypes.shape.isRequired,
}

export default ProductsList
