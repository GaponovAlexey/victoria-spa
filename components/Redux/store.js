import { configureStore } from '@reduxjs/toolkit'
import reducerData from './reducer'

export const store = configureStore({
  reducer: {
    data: reducerData,
  },
})
