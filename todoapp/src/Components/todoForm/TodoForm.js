import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";

function TodoForm({ onAddTask }) {
  // Estados locales para los campos del formulario
  const [taskName, setTaskName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica que el nombre de la tarea no esté vacío
    if (taskName.trim() === "") {
      alert("Por favor, ingresa el nombre de la tarea.");
      return;
    }

    // Crea un objeto con los datos de la tarea
    const newTask = {
      name: taskName,
      startDate,
      endDate,
    };

    // Llama a la función onAddTask pasando la nueva tarea como argumento
    onAddTask(newTask);

    // Limpia los campos del formulario
    setTaskName("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-4">
      <Form.Group>
        <Form.Label>Nombre de la Tarea:</Form.Label>
        <Form.Control
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Fecha de Inicio:</Form.Label>
        <Form.Control
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Fecha de Finalización:</Form.Label>
        <Form.Control
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Agregar Tarea
      </Button>
    </Form>
  );
}

export default TodoForm;
