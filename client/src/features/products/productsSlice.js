import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import baseUrl from '../../services/api'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const res = await baseUrl.get('/')
    return res
  }
)

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id, { dispatch }) => {
    await baseUrl.delete(`/${id}`)
    dispatch(fetchProducts())
    return 'Product deleted successfully'
  }
)

export const updateLike = async (id, isLiked) => {
  await baseUrl.patch(`/${id}/like`, { isLiked })
}

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (values) => {
    await baseUrl.post('/', values)
  }
)
export const productsSlice = createSlice({
  name: 'character',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.list = payload.data.data
    },
    [fetchProducts.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload.statusCode
    },
  },
})

export default productsSlice.reducer
