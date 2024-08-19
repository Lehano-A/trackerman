import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isVisible: null,
  isActiveLoadingIndicator: false,
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

    enableLoadingIndicator: (state) => {
      state.isActiveLoadingIndicator = true
    },

    disableLoadingIndicator: (state) => {
      state.isActiveLoadingIndicator = false
    },
  },
})


export const {
  showModalAddProduct,
  hideModalAddProduct,
  enableLoadingIndicator,
  disableLoadingIndicator
} = modalAddProductSlice.actions

export default modalAddProductSlice.reducer