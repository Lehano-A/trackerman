import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    saveDataProducts: (state, actions) => {
      state.data = actions.payload
    },
  },
})


export const { saveDataProducts } = productsSlice.actions

export default productsSlice.reducer