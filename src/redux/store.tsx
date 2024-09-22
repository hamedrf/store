import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./ProductSlice";

export const store = configureStore({
  reducer: {
    counter: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
