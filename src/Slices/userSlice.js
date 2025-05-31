import { createSlice } from '@reduxjs/toolkit'
import { getAuth } from 'firebase/auth'

const auth = getAuth()
const initialState = {
  value: auth.currentUser,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoginInfo: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { userLoginInfo } = userSlice.actions

export default userSlice.reducer