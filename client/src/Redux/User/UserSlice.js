import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null, 
  loading: false,
  isAdmin: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOutHandler: (state) => {
      state.currentUser = null;
      state.loading= false;
      state.error=null;
      state.isAdmin = false;
    },
    adminSignInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
      state.isAdmin = true;
    },
  },
});

export const {signInStart,signInSuccess,signInFailure, signOutHandler, adminSignInSuccess} = userSlice.actions;

export default userSlice.reducer;
