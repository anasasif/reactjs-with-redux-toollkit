import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userId: localStorage.getItem("userId") ? localStorage.getItem('userId') : '',
  userEmail: localStorage.getItem("userEmail") ? localStorage.getItem('userEmail') : '',
  userToken: localStorage.getItem("userToken") ? localStorage.getItem('userToken') : '',
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInUser(state, action) {
      state.userId = action.payload?.userId
      state.userEmail = action.payload?.userEmail
      state.userToken = action.payload?.userToken
      localStorage.setItem("userId", state.userId);
      localStorage.setItem("userToken", state.userToken)
      localStorage.setItem("userEmail", state.userEmail)
    },
    logoutUser(state, action) {
      state.userId = ''
      state.userEmail = ''
      state.userToken = ''
      localStorage.setItem("userId", state.userId);
      localStorage.setItem("userToken", state.userToken)
      localStorage.setItem("userEmail", state.userEmail)
    },
 

  },
  extraReducers: {
  }
});

export const { signInUser, logoutUser } = authReducer.actions;

export default authReducer.reducer;
