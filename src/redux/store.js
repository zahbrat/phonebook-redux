import { createStore } from "redux";
import { rootReducer } from "./reducer";

export const store = createStore(rootReducer);

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("contacts", JSON.stringify(state.contacts));
});
