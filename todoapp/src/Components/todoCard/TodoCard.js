// En TodoCard.js
import React from "react";
import { Card, Button, Form } from "react-bootstrap";

function TodoCard({ task, onDeleteTask, onEditTask, onMarkAsCompleted }) {
  const handleEditClick = () => {
    if (!task.isCompleted) {
      onEditTask(task);
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{task.name}</Card.Title>
        <Card.Text>Fecha de Inicio: {task.startDate}</Card.Text>
        <Card.Text>Fecha de Finalización: {task.endDate}</Card.Text>
        <Form.Check
          type="checkbox"
          label="Completada"
          checked={task.isCompleted}
          onChange={() => {
            onMarkAsCompleted(task.id); // Pasamos el ID de la tarea al marcarla como completada
          }}
        />
        <Button
          variant="info"
          onClick={handleEditClick}
          disabled={task.isCompleted} // Deshabilitar el botón de edición si la tarea está completada
        >
          Editar
        </Button>
        <Button variant="danger" onClick={onDeleteTask}>
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TodoCard;
