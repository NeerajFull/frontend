import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userAccessToken: "",
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserAccessToken: (state, action) => {
      state.userAccessToken = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getUserAccessToken } = counterSlice.actions

export default counterSlice.reducer