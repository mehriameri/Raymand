import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import PaginationTable from "./components/homePage/PaginationTable";
import ProfilePage from "./components/profilePage/ProfilePage";
import Store from "./redux/Store";

const App = () => {
  return (
    <Provider store={Store}>
      <Routes>
        <Route path="/" element={<PaginationTable />} />
        <Route path="/:id" element={<ProfilePage />} />
      </Routes>
    </Provider>
  )
}

export default App;
