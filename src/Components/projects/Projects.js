import React, { useState,useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TodoForm from "../todoForm/TodoForm";
import TodoCard from "../todoCard/TodoCard";
import EditTodo from "../editTodo/EditTodo"; 
import useTranslation from "../../custom/useTranslation/useTranslation";



function Projects() {
  const translate = useTranslation()

  const [projects, setProjectsState] = useState([]);
  const [editingproject, setEditingProject] = useState(null);
  const [userID, setUserID] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]); 
  const [userRole, setUserRole] = useState("");

  const setProjects = (newProjects) => {
    setProjectsState(newProjects);
    saveProjectsToLocalStorage(newProjects);
  };

  const saveProjectsToLocalStorage = (projects) => {
    localStorage.setItem("projects", JSON.stringify(projects));
  };

  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
    const storedUserID = localStorage.getItem("userID");
    if (storedUserID) {
      setUserID(storedUserID);
    }
    const storedUserRole = localStorage.getItem("userRole");
    if (storedUserRole) {
      setUserRole(storedUserRole);
    }
  }, []);

  useEffect(() => {
    if (userRole === '"user"') {
      const newFilteredProjects = projects.filter((project) => project.userID === Number(userID));
      setFilteredProjects(newFilteredProjects);
    } else {
      setFilteredProjects(projects);
    }
  }, [projects, userID, userRole]);
  
  const addproject = (newproject) => {
    setProjects([...projects, newproject]);
  };

  const deleteproject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const markprojectAsCompleted = (project) => {
    setProjects((prevprojects) =>
      prevprojects.map((t) =>
        t.id === project.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteCompletedProjects = () => {
    const incompleteProjects = projects.filter((project) => !project.completed);
    setProjects(incompleteProjects);
  };

  const editProject = (project) => {
    if (!project.completed) {
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
    <Container className="mt-4">
      <h1 className="text-center mb-4">{translate("list")}</h1>

      <TodoForm
        onAddproject={addproject}
        onDeleteCompletedproject={deleteCompletedProjects}
      />
      <Row className="mt-4">
        {filteredProjects.map((project, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-3">
            {editingproject === project ? (
              <EditTodo
                project={project}
                onUpdateproject={saveEditedProject}
                onCancel={cancelEdit}
              />
            ) : (
              <TodoCard
                project={project}
                onDeleteproject={() => deleteproject(index)}
                onEditProject={editProject}
                onMarkAsCompleted={markprojectAsCompleted}
              />
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;