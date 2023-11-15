import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TodoForm from "../todoForm/TodoForm";
import TodoCard from "../todoCard/TodoCard";
import EditTodo from "../editTodo/EditTodo"; 
import { TranslateContext } from "../../services/translationContext/translation.context";
import useTranslation from "../../custom/useTranslation/useTranslation";



function Todos() {
  const translate = useTranslation()

  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null); 

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const markTaskAsCompleted = (event) => {
    event.target.checked = !event.target.checked;
  };

  const deleteCompletedTasks = () => {
    const incompleteTasks = tasks.filter((task) => !task.completed);
    setTasks(incompleteTasks);
  };

  const editTask = (task) => {
    if (!task.completed) {
      setEditingTask(task);
    }
  };
  

  const saveEditedTask = (editedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
    setEditingTask(null); 
  };
  

  const cancelEdit = () => {
    setEditingTask(null); 
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">{translate("list")}</h1>

      <TodoForm
        onAddTask={addTask}
        onDeleteCompletedTask={deleteCompletedTasks}
      />

      <Row className="mt-4">
        {tasks.map((task, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-3">
            {editingTask === task ? (
              <EditTodo
                task={task}
                onUpdateTask={saveEditedTask}
                onCancel={cancelEdit}
              />
            ) : (
              <TodoCard
                task={task}
                onDeleteTask={() => deleteTask(index)}
                onEditTask={editTask}
                onMarkAsCompleted={markTaskAsCompleted}
              />
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Todos;
