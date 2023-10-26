import React from "react";
import "./App.css";
import User from "./Components/user/User";
import Projects from "./Components/projects/Projects";
import Todos from "./Components/todos/Todos";
import EditTodo from "./Components/editTodo/EditTodo";

function App() {
  return (
    <div className="app">
      <User />

      <Projects />

      <EditTodo />

      <Todos />
    </div>
  );
}

export default App;
