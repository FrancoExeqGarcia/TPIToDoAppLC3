import React from "react";
import { Card, Button, Form } from "react-bootstrap";

function ProjectCard({ project, onDeleteProject, onEditProject, onMarkAsCompleted }) {
  const handleEditClick = () => {
    if (!project.isCompleted) {
      onEditProject(project);
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>Fecha de Inicio: {project.startDate}</Card.Text>
        <Card.Text>Fecha de Finalización: {project.endDate}</Card.Text>
        <Form.Check
          type="checkbox"
          label="Completada"
          checked={project.isCompleted}
          onChange={() => {
            onMarkAsCompleted(project.id);
          }}
        />
        <Button
          variant="info"
          onClick={handleEditClick}
          disabled={project.isCompleted}
        >
          Editar
        </Button>
        <Button variant="danger" onClick={onDeleteProject}>
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
