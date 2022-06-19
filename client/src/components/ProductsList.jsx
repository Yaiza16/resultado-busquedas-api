/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types'
import { ProductItem } from '.'

function ProductsList({ products }) {
  return (
    <div className="products-list-container">
      {products.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  )
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape).isRequired,
}

export default ProductsList
