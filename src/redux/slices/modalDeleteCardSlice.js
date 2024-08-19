import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isVisible: null,
  dataDeletingCard: null,
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
  },
})


export const { showModal, hideModal, saveDataDeletingCard } = modalDeleteCardSlice.actions

export default modalDeleteCardSlice.reducer