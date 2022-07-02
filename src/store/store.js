import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
//* jehetu default vabe rootreducer export kori ni, tai {} er madhomme import krte hbe

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
