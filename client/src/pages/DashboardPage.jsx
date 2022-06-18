import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DashboardTitle from '../components/DashboardTitle'
import FilterDashboard from '../components/FilterDashboard'
import Pagination from '../components/Pagination'
import ProductsList from '../components/ProductsList'
import { fetchProducts } from '../features/products/productsSlice'

function DashboardPage() {
  const products = useSelector((state) => state.product.list)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div className="dashboard-page">
      <DashboardTitle />
      <FilterDashboard />
      {products.length !== 0 && <ProductsList products={products.products} />}
      <Pagination />
    </div>
  )
}

export default DashboardPage
