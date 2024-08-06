import { configureStore } from '@reduxjs/toolkit'
import { modalDeleteCardSlice } from '../slices/modalDeleteCardSlice'
import { productsSlice } from '../slices/productsSlice'

export const store = configureStore({
  reducer: {
    modalDeleteCard: modalDeleteCardSlice.reducer,
    products: productsSlice.reducer,
  },
})