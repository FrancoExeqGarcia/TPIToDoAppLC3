import React from "react";
import "./App.css";
import Sidebar from "./componets/sideBar/SideBar";
import Proyecto1 from "./componets/proyecto1/Proyecto1";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Proyecto1 />
    </div>
  );
}

export default App;
