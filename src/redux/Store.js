import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import UserReducer from "./UserReducer";

export const loadState = () => {
  try {
    const initState = sessionStorage.getItem("state");
    if (initState === null) {
      return undefined;
    }
    return JSON.parse(sessionStorage.getItem("state"));
  } catch (error) {
    console.log("getError", error);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    sessionStorage.setItem("state", JSON.stringify({ state }));
  } catch (err) {
    console.log("getError", err);
  }
};

export const Store = createStore(
  UserReducer,
  loadState(),
  applyMiddleware(thunk)
);
