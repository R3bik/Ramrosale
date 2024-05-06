import { createReducer } from "@reduxjs/toolkit";
import * as actionTypes from "../actions/userActionTypes"; // Import action types

const initialState = {
  isAuthenticated: false,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionTypes.LOAD_USER_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(actionTypes.LOAD_USER_SUCCESS, (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    })
    .addCase(actionTypes.LOAD_USER_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })
    // Add other cases as needed
    .addDefaultCase((state) => state);
});

export default userReducer;
