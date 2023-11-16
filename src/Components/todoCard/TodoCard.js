import React from "react";
import { Card, Button, Form } from "react-bootstrap";

//import { TranslateContext } from "../../services/translationContext/translation.context";
import useTranslation from "../../custom/useTranslation/useTranslation";

function TodoCard({ task, onDeleteTask, onEditTask, onMarkAsCompleted }) {
  const translate = useTranslation();

  const handleEditClick = () => {
    if (!task.completed) {
      if (task.name.trim() === "") {
        alert("El nombre de la tarea no puede estar vacío.");
        return;
      }

      onEditTask(task);
    }
  };

  return (
    <Card bg="success" key="dark" text="light">
      <Card.Body>
        <Card.Title>{task.name}</Card.Title>
        <Card.Text>
          {translate("start_date")}:{" "}
          {new Date(task.startDate).toLocaleDateString()}
        </Card.Text>
        <Card.Text>
          {translate("end_date")}: {new Date(task.endDate).toLocaleDateString()}
        </Card.Text>
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
