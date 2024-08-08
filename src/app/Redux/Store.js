import { configureStore } from '@reduxjs/toolkit'
import counterData  from "./Slice"

export const store = configureStore({
  reducer: {
    counterData
  },
})