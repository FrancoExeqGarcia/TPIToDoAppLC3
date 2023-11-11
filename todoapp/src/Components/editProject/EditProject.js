import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function EditProject({ project, onUpdateProject, onCancel, onDeleteProject }) {
  const [editedName, setEditedName] = useState(project.name);
  const [editedStartDate, setEditedStartDate] = useState(project.startDate);
  const [editedEndDate, setEditedEndDate] = useState(project.endDate);

  const handleSaveChanges = () => {
    const updatedProject = {
      ...project,
      name: editedName,
      startDate: editedStartDate,
      endDate: editedEndDate,
    };

    onUpdateProject(updatedProject);

    onCancel();
  };

  return (
    <Form onSubmit={handleSaveChanges}>
      <Form.Group>
        <Form.Label>Nombre del Proyecto:</Form.Label>
        <Form.Control
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Fecha de Inicio:</Form.Label>
        <Form.Control
          type="date"
          value={editedStartDate}
          onChange={(e) => setEditedStartDate(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Fecha de Finalización:</Form.Label>
        <Form.Control
          type="date"
          value={editedEndDate}
          onChange={(e) => setEditedEndDate(e.target.value)}
        />
      </Form.Group>
      <Button variant="danger" onClick={onDeleteProject}>
        Eliminar
      </Button>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
      <Button variant="secondary" onClick={onCancel}>
        Cancelar
      </Button>
    </Form>
  );
}

export default EditProject;
