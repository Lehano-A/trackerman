import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  connectionStatus: null
}

export const serverSlice = createSlice({
  name: 'server',
  initialState,
  reducers: {
    setOnlineConnectionStatus: (state) => {
      state.connectionStatus = true
    },

    setOfflineConnectionStatus: (state) => {
      state.connectionStatus = false
    },
  },
})


export const { setOnlineConnectionStatus, setOfflineConnectionStatus } = serverSlice.actions

export default serverSlice.reducer