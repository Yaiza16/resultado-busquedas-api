import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// import { baseUrl } from '../../services/api/breakingBadApi';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const res = await axios.get('http://localhost:5000/api/products')
    return res
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
