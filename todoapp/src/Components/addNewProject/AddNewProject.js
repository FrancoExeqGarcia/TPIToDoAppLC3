import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function AddNewProject({ onAddProject }) {
  const [ProjectName, setProjectName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ProjectName.trim() === "") {
      alert("Por favor, ingresa el nombre de la tarea.");
      return;
    }

    const newProject = {
      name: ProjectName,
      startDate,
      endDate,
    };

    onAddProject(newProject);

    setProjectName("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-4">
      <Form.Group>
        <Form.Label>Nombre del Proyecto:</Form.Label>
        <Form.Control
          type="text"
          value={ProjectName}
          onChange={(e) => setProjectName(e.target.value)}
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
        Agregar Proyecto
      </Button>
    </Form>
  );
}

export default AddNewProject;
