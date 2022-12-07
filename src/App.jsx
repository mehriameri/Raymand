import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { persistStore } from 'redux-persist';
import { PersistGate } from "redux-persist/integration/react";
import Store from "./redux/Store";
import PaginationTable from "./components/homePage/PaginationTable";
import ProfilePage from "./components/profilePage/ProfilePage";

let persistor = persistStore(Store);
const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/" element={<PaginationTable />} />
          <Route path="/:id" element={<ProfilePage />} />
        </Routes>
      </PersistGate>
    </Provider>
  )
}

export default App;
