import React, { useState, useEffect } from "react";
import useTranslation from "../../custom/useTranslation/useTranslation";
import { Form, Button, Col, Row, Alert } from "react-bootstrap";

function TodoForm({ onAddTask, onDeleteCompletedTask, editedTask }) {
  const translate = useTranslation();
  const [taskName, setTaskName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userID, setUserID] = useState("");

  useEffect(() => {
    setTaskName(editedTask ? editedTask.name : "");
    setStartDate(editedTask ? editedTask.startDate : "");
    setEndDate(editedTask ? editedTask.endDate : "");

    const storedUserID = localStorage.getItem("userID");
    setUserID(storedUserID);
  }, [editedTask]);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskName.trim() === "") {
      setErrorMessage("Por favor, ingresa el nombre de la tarea.");
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

    const newTask = {
      name: taskName,
      startDate,
      endDate,
      completed: false,
      userID,
    };

    if (editedTask) {
      onAddTask({ ...editedTask, ...newTask });
    } else {
      const taskWithId = { ...newTask, id: Date.now() }; 
      onAddTask(taskWithId);
    }

    setTaskName("");
    setStartDate("");
    setEndDate("");
    setErrorMessage("");
  };


  return (
    <Form onSubmit={handleSubmit} className="mt-4">
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3} className="text-end fw-bold">
          {translate("name_task")}
        </Form.Label>
        <Col sm={6}>
          <Form.Control
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3} className="text-end fw-bold">
          {translate("start_date")}
        </Form.Label>
        <Col sm={6}>
          <Form.Control
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3} className="text-end fw-bold">
          {translate("end_date")}
        </Form.Label>
        <Col sm={6}>
          <Form.Control
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col sm={{ span: 6, offset: 3 }}>
          <Button
            variant="success"
            type="submit"
            className="mt-3"
            style={{ marginRight: "8px" }}
          >
            {translate("add_task")}
          </Button>
          <Button
            variant="outline-danger"
            className="mt-3"
            onClick={onDeleteCompletedTask}
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

export default TodoForm;
