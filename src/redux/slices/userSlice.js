import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userAccessToken: "",
  isLogin: false
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserAccessToken: (state, action) => {
      state.userAccessToken = action.payload
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getUserAccessToken, setIsLogin } = counterSlice.actions

export default counterSlice.reducer