import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isActiveLoadingIndicator: false,
}

export const mainBlockSlice = createSlice({
  name: 'mainBlock',
  initialState,
  reducers: {
    enableLoadingIndicator: (state) => {
      state.isActiveLoadingIndicator = true
    },

    disableLoadingIndicator: (state) => {
      state.isActiveLoadingIndicator = false
    },
  },
})


export const { enableLoadingIndicator, disableLoadingIndicator } = mainBlockSlice.actions

export default mainBlockSlice.reducer