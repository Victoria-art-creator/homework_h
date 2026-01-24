import { configureStore } from "@reduxjs/toolkit";
import { swapiReducer } from "./swapiReducer";

export const store = configureStore({
  reducer: {
    swapi: swapiReducer,
  },
});
