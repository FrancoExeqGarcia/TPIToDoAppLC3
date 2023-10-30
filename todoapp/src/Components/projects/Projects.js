import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectForm from "../addNewProject/AddNewProject";
import ProjectCard from "../projectCard/ProjectCard";
import EditProject from "../editProject/EditProject"; // Importa el nuevo componente EditProject

function Projects() {
  const [projects, setProjects] = useState([]);
  const [editingProjects, setEditingProject] = useState(null);

  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const deleteProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };


  const editProject = (project) => {
    if (!project.isCompleted) {
      setEditingProject(project);
    }
  };

  const saveEditedProject= (editedProject) => {
    const updatedProjects = projects.map((project) =>
      project.id === editedProject.id ? editedProject : project
    );
    setProjects(updatedProjects);
    setEditingProject(null);
  };

  const cancelEdit = () => {
    setEditingProject(null);
  };

  return (
    <Container>
      <h1 className="mt-5">Lista de Tareas</h1>

      <ProjectForm onAddproject={addProject} />

      <Row className="mt-4">
        {projects.map((project, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-3">
            {editingProjects === project ? (
              <EditProject
                project={project}
                onUpdateproject={saveEditedProject}
                onCancel={cancelEdit}
              />
            ) : (
              <ProjectCard
                project={project}
                onDeleteproject={() => deleteProject(index)}
                onEditproject={editProject}
              />
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;