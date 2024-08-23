import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension';
import { modalDeleteCardSlice } from '../slices/modalDeleteCardSlice'
import { productsSlice } from '../slices/productsSlice'
import { modalAddProductSlice } from '../slices/modalAddProductSlice'
import { mainBlockSlice } from '../slices/mainBlockSlice';
import { serverSlice } from '../slices/serverSlice';


export const store = configureStore({
  reducer: {
    modalAddProduct: modalAddProductSlice.reducer,
    modalDeleteCard: modalDeleteCardSlice.reducer,
    products: productsSlice.reducer,
    mainBlock: mainBlockSlice.reducer,
    server: serverSlice.reducer,
  },
  composeWithDevTools
})