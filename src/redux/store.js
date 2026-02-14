import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("contacts", JSON.stringify(state.contacts.items));
});
