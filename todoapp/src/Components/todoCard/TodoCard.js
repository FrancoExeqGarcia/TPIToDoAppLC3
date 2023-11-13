import React from "react";
import { Card, Button, Form } from "react-bootstrap";

function TodoCard({ task, onDeleteTask, onEditTask, onMarkAsCompleted }) {
  const handleEditClick = () => {
    if (!task.isCompleted) {
      onEditTask(task, task.project);
    }
  };

  return (
    <Card bg="dark" key="dark" text="light">
      <Card.Body>
        <Card.Title>{task.name}</Card.Title>
        <Card.Text>Fecha de Inicio: {task.startDate}</Card.Text>
        <Card.Text>Fecha de Finalización: {task.endDate}</Card.Text>
        <Form.Check
          type="checkbox"
          label="Completada"
          checked={task.isCompleted}
          onChange={() => onMarkAsCompleted(task.id)}
        />
        <Button
          variant="info"
          onClick={handleEditClick}
          disabled={task.isCompleted}
        >
          Editar
        </Button>
        <Button variant="danger" onClick={() => onDeleteTask(task)}>
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TodoCard;
