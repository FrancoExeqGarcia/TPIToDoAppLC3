import React, { useState, useEffect } from "react";
import useTranslation from "../../custom/useTranslation/useTranslation";
import { Form, Button, Col, Row, Alert } from "react-bootstrap";

function ProjectForm({ onAddProject, onDeleteCompletedProject, editedProject }) {
  const translate = useTranslation();
  const [projectName, setProjectName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setProjectName(editedProject ? editedProject.name : "");
    setStartDate(editedProject ? editedProject.startDate : "");
    setEndDate(editedProject ? editedProject.endDate : "");
  }, [editedProject]);

  const handleSubmit = (e) => {
    e.preventDefault();


    if (projectName.trim() === "") {
      setErrorMessage("Por favor, ingresa el nombre del Proyecto.");
      return;
    }

    if (!startDate) {
      setErrorMessage("Por favor, ingresa la fecha de inicio.");
      return;
    }

    if (!endDate) {
      setErrorMessage("Por favor, ingresa la fecha de fin.");
      return;
    }

    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    if (endDateObj < startDateObj) {
      setErrorMessage(
        "La fecha de fin no puede ser anterior a la fecha de inicio."
      );
      return;
    }
    const userID = JSON.parse(localStorage.getItem("userID"));
    
    const newProject = {
      name: projectName,
      startDate,
      endDate,
      userID,
    };

    if (editedProject) {
      
      onAddProject({ ...editedProject, ...newProject });
    } else {
      
      const projectWithId = { ...newProject, id: Date.now() }; 
      onAddProject(projectWithId);
    }

    setProjectName("");
    setStartDate("");
    setEndDate("");
    setErrorMessage("");
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-4">
      <Form.Group as={Row}>
        <Form.Label column sm={4} className="text-right">
          {translate("name_project")}
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={4} className="text-right">
          {translate("start_date")}
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
          {translate("end_date")}
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
            {translate("add_task")}
          </Button>
          <Button
            variant="outline-danger"
            className="mt-3"
            onClick={onDeleteCompletedProject}
            type="submit"
          >
            {translate("delete_completed")}
          </Button>
        </Col>
      </Form.Group>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
    </Form>
  );
}

export default ProjectForm;
