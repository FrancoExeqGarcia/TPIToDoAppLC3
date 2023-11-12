import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../projectCard/ProjectCard";
import EditProject from "../editProject/EditProject"; // Importa el nuevo componente EditProject
import AddNewProject from "../addNewProject/AddNewProject";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [editingProjects, setEditingProject] = useState(null);

  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, tasks: [] }]);
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

  const saveEditedProject = (editedProject) => {
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
      <h1 className="mt-4">Proyectos</h1>

      <AddNewProject onAddProject={addProject} />

      <Row className="mt-4">
        {projects.map((project, index) => (
          <Col key={index} xs={6} md={6} lg={4} className="mb-3">
            {editingProjects === project ? (
              <EditProject
                project={project}
                onUpdateProject={saveEditedProject}
                onCancel={cancelEdit}
                onDeleteProject={() => deleteProject(index)}
              />
            ) : (
              <ProjectCard project={project} onEditProject={editProject} />
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
