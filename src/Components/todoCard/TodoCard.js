import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import useTranslation from "../../custom/useTranslation/useTranslation";

function TodoCard({ task, onDeleteTask, onEditTask, onMarkAsCompleted }) {
  const translate = useTranslation();

  const isValidDate = (dateString) => {
    // Implementa la lógica de validación de fecha aquí
    // Puedes usar bibliotecas como moment.js o JavaScript Date Object para validar la fecha
    // Devuelve true si la fecha es válida, de lo contrario, devuelve false

    // Por ejemplo, podrías usar el objeto Date de JavaScript para la validación básica:
    const isValid = !isNaN(new Date(dateString).getTime());

    return isValid;
  };

  const handleEditClick = () => {
    if (!task.completed) {
      if (task.name.trim() === "") {
        alert("El nombre de la tarea no puede estar vacío.");
        return;
      }
      if (!isValidDate(task.startDate)) {
        alert("La fecha de inicio no es válida.");
        return;
      }
  
      // Validar fecha de fin
      if (!isValidDate(task.endDate)) {
        alert("La fecha de fin no es válida.");
        return;
      }
      onEditTask(task);
    }
  };

  return (
    <Card bg="dark" key="dark" text="light">
      <Card.Body>
        <Card.Title>{task.name}</Card.Title>
        <Card.Text>{translate("start_date")}: {new Date(task.startDate).toLocaleDateString()}</Card.Text>
        <Card.Text>{translate("end_date")}: {new Date(task.endDate).toLocaleDateString()}</Card.Text>
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