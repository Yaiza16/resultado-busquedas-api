/* eslint-disable no-underscore-dangle  */

import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { deleteProduct, updateLike } from '../features/products/productsSlice'

const useProduct = (product) => {
  const dispatch = useDispatch()
  const notify = (text) => toast.success(text)
  const { price, displayName, like } = product
  const [isLiked, setIsLiked] = useState(like)

  const handleOnClickLike = async () => {
    setIsLiked((oldIsLiked) => !oldIsLiked)
    useDispatch(updateLike(product._id, !isLiked))
  }

  const handleOnClickRemove = async () => {
    const { payload: text } = await dispatch(deleteProduct(product._id))
    notify(text)
  }
  return { price, displayName, isLiked, handleOnClickLike, handleOnClickRemove }
}

export default useProduct
