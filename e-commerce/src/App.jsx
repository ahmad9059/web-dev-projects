import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import { Details } from "./components/Details";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Topbar from "./components/Topbar";

const App = () => {
  const { search, pathname } = useLocation();

  return (
    <div className="h-screen w-screen flex flex-col ">
      {pathname != `/` && (
        <div>
          <Topbar />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;
