import React from "react";
import { Route, Routes } from "react-router";
import PaginationTable from "./components/homePage/PaginationTable";
import ProfilePage from "./components/profilePage/ProfilePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PaginationTable />} />
      <Route path="/:id" element={<ProfilePage />} />
    </Routes>
  )
}

export default App;
