import React from "react";
import { Route, Routes } from "react-router";
import PaginationTable from "./components/homePage/PaginationTable";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PaginationTable/>} />
    </Routes>
  )
}

export default App;
