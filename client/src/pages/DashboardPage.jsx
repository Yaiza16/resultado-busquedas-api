import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  DashboardTitle,
  FilterDashboard,
  Loader,
  Pagination,
} from '../components'
import ProductsList from '../components/ProductsList'
import { fetchProducts } from '../features/products/productsSlice'

function DashboardPage() {
  const { list: products, loading } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  if (loading) return <Loader />
  return (
    <div className="dashboard-page">
      <DashboardTitle />
      {products.length !== 0 && (
        <FilterDashboard numberOfProducts={products.products.length || 0} />
      )}
      {products.length !== 0 && <ProductsList products={products.products} />}
      <Pagination />
    </div>
  )
}

export default DashboardPage
