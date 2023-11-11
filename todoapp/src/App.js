import React from "react";
import "./App.css";
import User from "./Components/user/User";
import Todos from "./Components/todos/Todos";
import EditTodo from "./Components/editTodo/EditTodo";
import NavBar from "./Components/navBar/NavBar";
import Login from "./Components/logIn/LogIn";
import { useContext } from "react";
import { ThemeContext } from "./Components/services/themeContext/theme.context";
import { Navbar } from "react-bootstrap";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div /*className={`App ${theme === "DARK" && "dark-theme"}`}*/>
      <NavBar>
        <User />
      </NavBar>
      <Login />
      <Todos />
    </div>
  );
}

export default App;
