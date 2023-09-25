import React from "react";

import TodoCard from "../todoCard/TodoCard";
import TodoDate from "../../todoDate/TodoDate";

const TodoItem = ({
  title,
  createdBy,
  dateRead,
  finalDate,
  project,
  description,
}) => {
  return (
    <TodoCard>
      <h2>{title}</h2>
      <h3>Creado por:{createdBy}</h3>
      <div>
        Fecha de inicio:
        <TodoDate date={dateRead} />
        Fecha final:
        <TodoDate date={finalDate} />
      </div>
      <p>proyeco : {project}</p>
      <p>descripcion: {description}</p>
    </TodoCard>
  );
};

export default TodoItem;
