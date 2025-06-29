import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './Slices/userSlice'
import chatSlice from './Slices/chatSlice'



export const store = configureStore({
  reducer: {
    userLogin: userSlice,
    chating: chatSlice,
  },
})