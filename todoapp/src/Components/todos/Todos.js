import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TodoForm from "../todoForm/TodoForm";
import TodoCard from "../todoCard/TodoCard";
import EditTodo from "../editTodo/EditTodo"; // Importa el nuevo componente EditTodo

function Todos() {
  // Estado para almacenar la lista de tareas
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null); // Estado para rastrear la tarea en edición

  // Función para agregar una nueva tarea a la lista
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Función para eliminar una tarea de la lista por su índice
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  // Función para marcar una tarea como completada
  const markTaskAsCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            isCompleted: !task.isCompleted,
          }
        : task
    );
    setTasks(updatedTasks);
  };

  // Función para eliminar tareas completadas
  const deleteCompletedTasks = () => {
    const incompleteTasks = tasks.filter((task) => !task.isCompleted);
    setTasks(incompleteTasks);
  };

  // Función para editar una tarea
  const editTask = (task) => {
    if (!task.isCompleted) {
      setEditingTask(task);
    }
  };

  // Función para guardar los cambios editados de una tarea
  const saveEditedTask = (editedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
    setEditingTask(null); // Sale del modo de edición
  };

  // Función para cancelar la edición de una tarea
  const cancelEdit = () => {
    setEditingTask(null); // Sale del modo de edición
  };

  return (
    <Container>
      <h1 className="mt-5">Lista de Tareas</h1>

      {/* Pasa la función addTask como prop a TodoForm */}
      <TodoForm onAddTask={addTask} />

      <Row className="mt-4">
        {/* Renderiza cada tarea utilizando TodoCard o EditTodo según corresponda */}
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
                onMarkAsCompleted={markTaskAsCompleted} // Pasa la función de marca como completada
              />
            )}
          </Col>
        ))}
      </Row>

      <div className="mt-3">
        {/* Botón para eliminar tareas completadas */}
        <Button variant="danger" onClick={deleteCompletedTasks}>
          Eliminar Completadas
        </Button>
      </div>
    </Container>
  );
}

export default Todos;
