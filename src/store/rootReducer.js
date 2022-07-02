//* reducer/slice ke ekottre combine kore rakhbo
//* ei root reducer ke store er moddhe dite hobe
import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "../redux/slice";

export const rootReducer = combineReducers({
  //* ekhane shob reducer/slice thakbe
  auth: authSlice.reducer, //* 1 ta func. pabo
});
