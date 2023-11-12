import React from "react";
import { Card, Button, Form } from "react-bootstrap";

function ProjectCard({ project, onEditProject }) {
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
        <Card.Text>Creado por:{project.ownerName}</Card.Text>
        <Button
          variant="info"
          onClick={handleEditClick}
          disabled={project.isCompleted}
        >
          Editar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
