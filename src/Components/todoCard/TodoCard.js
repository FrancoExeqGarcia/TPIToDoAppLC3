import React from "react";
import { Card, Button, Form } from "react-bootstrap";

import { TranslateContext } from "../../services/translationContext/translation.context";
import useTranslation from "../../custom/useTranslation/useTranslation";

function TodoCard({ task, onDeleteTask, onEditTask, onMarkAsCompleted }) {
  const handleEditClick = () => {
    if (!task.completed) {
      onEditTask(task, task.project);
    }
  };

  const translate = useTranslation();

  return (
    <Card bg="dark" key="dark" text="light">
      <Card.Body>
        <Card.Title>{task.name}</Card.Title>
        <Card.Text>{translate("start_date")}{task.startDate}</Card.Text>
        <Card.Text>{translate("end_date")} {task.endDate}</Card.Text>
        <Form.Check
          type="checkbox"
          label="Completada"
          checked={task.completed}
          onClick={onMarkAsCompleted}
        />
        <Button
          variant="info"
          onClick={handleEditClick}
          disabled={task.completed}
        >
          {translate("edit")}
        </Button>
        <Button variant="danger" onClick={() => onDeleteTask()}>
        {translate("delete")}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TodoCard;
