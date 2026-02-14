import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, setFilter, updateForm } from "./actions";

const initialState = {
  items: JSON.parse(localStorage.getItem("contacts")) || [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
  name: "",
  number: "",
};

const contactsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addContact, (state, action) => {
      state.items.push(action.payload);
      state.name = "";
      state.number = "";
    })
    .addCase(deleteContact, (state, action) => {
      state.items = state.items.filter((c) => c.id !== action.payload);
    })
    .addCase(setFilter, (state, action) => {
      state.filter = action.payload;
    })
    .addCase(updateForm, (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    });
});

export default contactsReducer;
