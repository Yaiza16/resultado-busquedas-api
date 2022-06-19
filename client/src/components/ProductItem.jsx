/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle  */
import PropTypes from 'prop-types'
import { useState } from 'react'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'
import { MdDeleteOutline } from 'react-icons/md'

import axios from 'axios'

import defaultPlaceholder from '../assets/default-placeholder.png'

function ProductItem({ product }) {
  const { price, displayName, like } = product
  const [isLiked, setIsLiked] = useState(like)

  const handleOnClickLike = async () => {
    setIsLiked((oldIsLiked) => !oldIsLiked)
    await axios.patch(
      `http://localhost:5000/api/products/${product._id}/like`,
      {
        isLiked: !isLiked,
      }
    )
  }


  return (
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
          aria-hidden="true"
        >
          <MdDeleteOutline fontSize={24} color="red" />
        </div>
      </div>
      <p className="product-item-name">{displayName}</p>
      <p className="product-item-price">£{price}</p>
    </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.shape.isRequired,
}

export default ProductItem
