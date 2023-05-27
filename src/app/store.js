import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import { UsersApi } from '../services/users';
import authReducer from "../reducers/authReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [UsersApi.reducerPath]: UsersApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UsersApi.middleware)
})

setupListeners(store.dispatch)
