import { configureStore } from "@reduxjs/toolkit";
import recentsReducer from "./recents";
import contactsReducer from "./contacts";

export const store = configureStore({
  reducer: {
    recents: recentsReducer,
    contacts: contactsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
