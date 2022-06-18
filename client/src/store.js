import { configureStore } from '@reduxjs/toolkit'
import product from './features/products/productsSlice'

export default configureStore({
  reducer: {
    product,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['products/fetchProducts/fulfilled'],
      },
    }),
})
