import React, { useState, useContext } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { AuthenticationContext } from "../services/authenticationContext/authentication.context";

function AddNewProject({ onAddProject }) {
  const [ProjectName, setProjectName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { user } = useContext(AuthenticationContext);
  const owner = user.email.split("@")[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ProjectName.trim() === "") {
      alert("Por favor, ingresa el nombre de la tarea.");
      return;
    }

    const newProject = {
      name: ProjectName,
      ownerName: owner,
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
      <Form.Group as={Row}>
        <Form.Label column sm={4}>
          Nombre del Proyecto:
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            type="text"
            value={ProjectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={4}>
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
        <Form.Label column sm={4}>
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
            Agregar Proyecto
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default AddNewProject;
