import React from "react";

const TodoDate = ({ date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("es-AR", { month: "long" });
  const day = date.toLocaleString("es-AR", { day: "2-digit" });

  return (
    <div>
      <div>
        {year}/{month}/{day}
      </div>
    </div>
  );
};

export default TodoDate;
