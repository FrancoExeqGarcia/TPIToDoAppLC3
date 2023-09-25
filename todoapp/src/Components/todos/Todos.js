import React from "react";
import TodoItem from "../todoItem/TodoItem";

const Todos = () => {
  const todoNow = [
    {
      title: "Hacer tpi",
      createdBy: "Lorenzo",
      dateRead: new Date(2023, 2, 2),
      finalDate: new Date(2023, 5, 20),
      project: "tpi",
      description: "Terminar en tiempo y forma",
    },
    {
      title: "compras",
      createdBy: "Lorenzo",
      dateRead: new Date(2023, 2, 16),
      finalDate: new Date(2023, 5, 20),
      project: "casa",
      description: "comprar para la limpieza",
    },
    {
      title: "pasear al perro",
      createdBy: "Lorenzo",
      dateRead: new Date(2023, 2, 16),
      finalDate: new Date(2023, 5, 20),
      project: "casa",
      description: "pasear a milka 2 veces al dia",
    },
  ];
  return (
    <div>
      {todoNow.map((todo, index) => (
        <TodoItem
          title={todo.title}
          createdBy={todo.createdBy}
          dateRead={todo.dateRead}
          finalDate={todo.finalDate}
          project={todo.project}
          description={todo.description}
        />
      ))}
    </div>
  );
};

export default Todos;
