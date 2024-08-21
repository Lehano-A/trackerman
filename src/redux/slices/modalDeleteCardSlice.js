import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isVisible: null,
  dataDeletingCard: null,
  isActiveLoadingIndicator: false,
}

export const modalDeleteCardSlice = createSlice({
  name: 'modalDeleteCard',
  initialState,
  reducers: {
    showModal: (state) => {
      state.isVisible = true
    },

    hideModal: (state) => {
      state.isVisible = false
    },

    saveDataDeletingCard: (state, actions) => {
      state.dataDeletingCard = actions.payload
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
  showModal,
  hideModal,
  saveDataDeletingCard,
  enableLoadingIndicator,
  disableLoadingIndicator
} = modalDeleteCardSlice.actions

export default modalDeleteCardSlice.reducer