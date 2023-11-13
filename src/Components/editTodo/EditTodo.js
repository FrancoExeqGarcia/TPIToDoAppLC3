import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function EditTodo({ task, onUpdateTask, onCancel }) {
  // Estados locales para los campos editables
  const [editedName, setEditedName] = useState(task.name);
  const [editedStartDate, setEditedStartDate] = useState(task.startDate);
  const [editedEndDate, setEditedEndDate] = useState(task.endDate);

  // Función para guardar los cambios editados
  const handleSaveChanges = () => {
    const updatedTask = {
      ...task,
      name: editedName,
      startDate: editedStartDate,
      endDate: editedEndDate,
    };

    // Llama a la función onUpdateTask pasando la tarea actualizada
    onUpdateTask(updatedTask);

    // Llama a la función onCancel para salir del modo de edición
    onCancel();
  };

  return (
    <Form onSubmit={handleSaveChanges}>
      <Form.Group>
        <Form.Label>Nombre de la Tarea:</Form.Label>
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
      <Button variant="primary" type="submit">
        Guardar
      </Button>
      <Button variant="secondary" onClick={onCancel}>
        Cancelar
      </Button>
    </Form>
  );
}

export default EditTodo;
