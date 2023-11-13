import React, { useState } from "react";

import { Form, Button, Col, Row } from "react-bootstrap";

function TodoForm({ onAddTask, onDeleteCompletedTask }) {
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
      completed: false,
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
      <Form.Group as={Row}>
        <Form.Label column sm={4} className="text-right">
          Nombre de la Tarea:
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={4} className="text-right">
          Fecha de Inicio:
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={4} className="text-right">
          Fecha de Finalización:
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col sm={{ span: 8, offset: 4 }}>
          <Button variant="primary" type="submit" className="mt-3">
            Agregar Tarea
          </Button>
          <Button
            variant="outline-danger"
            className="mt-3"
            onClick={onDeleteCompletedTask}
            type="submit"
          >
            Eliminar Completadas
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default TodoForm;
