import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import storage from 'redux-persist/lib/storage';
import UserReducer from "./UserReducer";

const persistConfig = {
  key: 'root',
  storage: storageSession
};
const persistedReducer = persistReducer(persistConfig, UserReducer);
const Store = createStore(persistedReducer, applyMiddleware(thunk));
export default Store;