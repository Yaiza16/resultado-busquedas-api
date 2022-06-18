import axios from 'axios'

export const baseUrl = axios.create({
  baseURL: 'localhost:5000/api/products',
})

export const baseRandom = ''
