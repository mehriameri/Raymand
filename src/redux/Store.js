import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import UserReducer from "./UserReducer";

const Store = createStore(UserReducer, applyMiddleware(thunk));

export default Store;