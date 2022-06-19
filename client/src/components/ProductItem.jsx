/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle  */
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'
import { MdDeleteOutline } from 'react-icons/md'
import toast, { Toaster } from 'react-hot-toast'
import defaultPlaceholder from '../assets/default-placeholder.png'
import { deleteProduct, updateLike } from '../features/products/productsSlice'

function ProductItem({ product }) {
  const notify = (text) => toast.success(text)

  const dispatch = useDispatch()
  const { price, displayName, like } = product
  const [isLiked, setIsLiked] = useState(like)

  const handleOnClickLike = async () => {
    setIsLiked((oldIsLiked) => !oldIsLiked)
    dispatch(updateLike(product._id, !isLiked))
  }

  const handleOnClickRemove = async () => {
    const { payload: text } = await dispatch(deleteProduct(product._id))
    notify(text)
  }
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
