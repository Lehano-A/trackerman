import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension';
import { modalDeleteCardSlice } from '../slices/modalDeleteCardSlice'
import { productsSlice } from '../slices/productsSlice'
import { modalAddProductSlice } from '../slices/modalAddProductSlice'


export const store = configureStore({
  reducer: {
    modalAddProduct: modalAddProductSlice.reducer,
    modalDeleteCard: modalDeleteCardSlice.reducer,
    products: productsSlice.reducer,
  },
  composeWithDevTools
})