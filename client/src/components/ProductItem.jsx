/* eslint react/jsx-one-expression-per-line: 0 */
import PropTypes from 'prop-types'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'

import defaultPlaceholder from '../assets/default-placeholder.png'

function ProductItem({ product }) {
  const { price, displayName, like } = product

  return (
    <div className="product-item-container">
      <div className="product-item-img-container">
        <img
          src={product.image ? product.image : defaultPlaceholder}
          alt=""
          className="product-item-img"
        />
        <div className="product-item-like-icon">
          {like ? (
            <IoMdHeart fontSize={24} />
          ) : (
            <IoMdHeartEmpty fontSize={24} />
          )}
        </div>
      </div>
      <p className="product-item-name">{displayName}</p>
      <p className="product-item-price">
        £{price}
        /m
        <sup>2</sup>
      </p>
    </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.shape.isRequired,
}

export default ProductItem
