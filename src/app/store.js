import { configureStore } from "@reduxjs/toolkit";

import { bookApi } from "../features/api/apiSlice";
import filterReducer from "../features/filters/filterSlice";

export const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
    filters: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});
