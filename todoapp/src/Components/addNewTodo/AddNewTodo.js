import React, { useState } from "react";

const AddNewTodo = ({ addTodo }) => {
  const [todoData, setTodoData] = useState({
    title: "",
    createdBy: "",
    dateRead: "",
    finalDate: "",
    description: "",
    project: "",
  });
  return (
  <div>
    <form>
      <label>Crear una nueva tarea</label>
      
    </form>
  </div>
  );
};

export default AddNewTodo;
