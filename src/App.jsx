import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { persistStore } from 'redux-persist';
import { PersistGate } from "redux-persist/integration/react";
import Store from "./redux/Store";
import ProfilePage from "./pages/ProfilePage";
import HomePage from './pages/HomePage';

let persistor = persistStore(Store);
const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/:id" element={<ProfilePage />} />
        </Routes>
      </PersistGate>
    </Provider>
  )
}

export default App;
