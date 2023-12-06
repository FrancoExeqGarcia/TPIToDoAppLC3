import React from "react";
import { Card, Button, Form } from "react-bootstrap";

import { TranslateContext } from "../../services/translationContext/translation.context";
import useTranslation from "../../custom/useTranslation/useTranslation";

function ProjectCard({ project, onDeleteProject, onEditProject, onMarkAsCompleted }) {
  const translate = useTranslation();

  const handleEditClick = () => {
    if (!project.completed) {
      if (project.name.trim() === "") {
        alert("El nombre del Proyecto no puede estar vacío.");
        return;
      }

      onEditProject(project);
    }
  };

  return (
    <Card bg="dark" key="dark" text="light">
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>{translate("start_date")}: {new Date(project.startDate).toLocaleDateString()}</Card.Text>
        <Card.Text>{translate("end_date")}: {new Date(project.endDate).toLocaleDateString()}</Card.Text>
        <Form.Check
          type="checkbox"
          label= {translate("completed")}
          onClick={() => onMarkAsCompleted(project)}
          />
          <Button
            variant="info"
            onClick={handleEditClick}
            disabled={project.completed}
          >
            {translate("edit")}
          </Button>
          <Button variant="danger" onClick={() => onDeleteProject(project)}>
            {translate("delete")}
          </Button>
        </Card.Body>
      </Card>
    );
  }
  export default ProjectCard;