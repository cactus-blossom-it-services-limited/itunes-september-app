import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { itunesApi } from "./services/itunesApi";

export const store = configureStore({
    reducer: {
        [itunesApi.reducerPath]: itunesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(itunesApi.middleware)
})