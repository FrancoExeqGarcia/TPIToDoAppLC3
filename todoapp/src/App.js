import React from "react";
import "./App.css";
import SideBar from "./Components/sideBar/SideBar";
import User from "./Components/user/User";
import Projects from "./Components/projects/Projects";
import Todos from "./Components/todos/Todos";
import EditTodo from "./Components/editTodo/EditTodo";
import NavBar from "./Components/navBar/NavBar";
import AddNewProject from "./Components/addNewProject/AddNewProject";
import Login from "./Components/logIn/LogIn";
import { useContext } from "react";
import { ThemeContext } from "./Components/services/themeContext/theme.context";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div /*className={`App ${theme === "DARK" && "dark-theme"}`}*/>
      <NavBar>
        <User />
      </NavBar>
      <SideBar>
        <Projects />
        <EditTodo />
      </SideBar>
      <Login />
      <Todos />
      <AddNewProject />
    </div>
  );
}

export default App;
