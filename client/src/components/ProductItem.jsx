/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'
import { MdDeleteOutline } from 'react-icons/md'
import { Toaster } from 'react-hot-toast'
import defaultPlaceholder from '../assets/default-placeholder.png'
import useProduct from '../hooks/useProduct'

function ProductItem({ product }) {
  const {
    price,
    displayName,
    isLiked,
    handleOnClickLike,
    handleOnClickRemove,
  } = useProduct(product)

  return (
    <>
      <Toaster position="top-right" />
      <div className="product-item-container">
        <div className="product-item-img-container">
          <img
            src={product.image ? product.image : defaultPlaceholder}
            alt=""
            className="product-item-img"
          />
          <div
            className="product-item-icon product-item-icon--like"
            onClick={handleOnClickLike}
            aria-hidden="true"
          >
            {isLiked ? (
              <IoMdHeart fontSize={24} />
            ) : (
              <IoMdHeartEmpty fontSize={24} />
            )}
          </div>
          <div
            className="product-item-icon product-item-icon--delete"
            onClick={handleOnClickRemove}
            aria-hidden="true"
          >
            <MdDeleteOutline fontSize={24} color="red" />
          </div>
        </div>
        <p className="product-item-name">{displayName}</p>
        <p className="product-item-price">£{price}</p>
      </div>
    </>
  )
}

ProductItem.propTypes = {
  product: PropTypes.shape.isRequired,
}

export default ProductItem
