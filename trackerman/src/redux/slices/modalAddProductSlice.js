import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isVisible: null,
}

export const modalAddProductSlice = createSlice({
  name: 'modalAddProduct',
  initialState,
  reducers: {
    showModalAddProduct: (state) => {
      state.isVisible = true
    },

    hideModalAddProduct: (state) => {
      state.isVisible = false
    },
  },
})


export const { showModalAddProduct, hideModalAddProduct } = modalAddProductSlice.actions

export default modalAddProductSlice.reducer