import { configureStore } from '@reduxjs/toolkit'
import { modalDeleteCardSlice } from '../slices/ModalDeleteCardSlice'


export const store = configureStore({
  reducer: {
    modalDeleteCard: modalDeleteCardSlice.reducer,
  },
})