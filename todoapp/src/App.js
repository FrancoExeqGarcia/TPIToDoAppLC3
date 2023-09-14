import React from "react";
import "./App.css";
import SideBar from "./Components/sideBar/SideBar";
import User from "./Components/user/User";
import Projects from "./Components/projects/Projects";
import AddNewTodo from "./Components/addNewTodo/AddNewTodo";
import Todos from "./Components/todos/Todos";
import EditTodo from "./Components/editTodo/EditTodo";
import NavBar from "./Components/navBar/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar>
        <User />
      </NavBar>
      <SideBar>
        <Projects />
        <AddNewTodo />
        <EditTodo />
      </SideBar>
        <Todos />
        
    </div>
  );
}

export default App;
