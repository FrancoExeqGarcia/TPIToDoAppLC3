import React, { useState, useCallback, useMemo } from "react";
import { Card, Button, Form } from "react-bootstrap";

import { TranslateContext } from "../../services/translationContext/translation.context";
import useTranslation from "../../custom/useTranslation/useTranslation";

function TodoCard({ task, onDeleteTask, onEditTask, onMarkAsCompleted }) {
  const translate = useTranslation();
  const startDate= useState(task.startDate);
  const endDate = useState(task.endDate);

  const isValidDate = useCallback((dateString) => {
    const isValid = !isNaN(new Date(dateString).getTime());
    return isValid;
  }, []);

  const formattedStartDate = useMemo(() => {
    return new Date(startDate).toLocaleDateString();
  }, [startDate]);

  const formattedEndDate = useMemo(() => {
    return new Date(endDate).toLocaleDateString();
  }, [endDate]);

  const handleEditClick = useCallback(() => {
    if (!task.completed) {
      if (task.name.trim() === "") {
        alert("El nombre de la tarea no puede estar vacío.");
        return;
      }
      if (!isValidDate(startDate) || !isValidDate(endDate)) {
        alert("Formato de fecha no válido. Utilice el formato correcto.");
        return;
      }
      onEditTask({ ...task, startDate, endDate });
    }
  }, [task, startDate, endDate, isValidDate, onEditTask]);

  return (
    <Card bg="dark" key="dark" text="light">
      <Card.Body>
        <Card.Title>{task.name}</Card.Title>
        <Card.Text>{translate("start_date")}: {formattedStartDate}</Card.Text>
        <Card.Text>{translate("end_date")}: {formattedEndDate}</Card.Text>
        <Form.Check
          type="checkbox"
          label="Completada"
          onClick={() => onMarkAsCompleted(task)}
        />
        <Button
          variant="info"
          onClick={handleEditClick}
          disabled={task.completed}
        >
          {translate("edit")}
        </Button>
        <Button variant="danger" onClick={() => onDeleteTask(task)}>
          {translate("delete")}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TodoCard;
