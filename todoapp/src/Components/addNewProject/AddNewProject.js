import React from "react";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const ProjectArray = [
  {
    Name: "",
    People: "",
    StartDate: new Date(2023, 9, 23),
    EndDare: new Date(2023, 9, 23),
  },
];

const AddNewProject = ({ onSaveProject }) => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const changeNameHandler = (event) => {
    setName(event.target.value);
  };
  const changePeopleHandler = (event) => {
    setPeople(event.target.value);
  };

  const changeStartDateHandler = (event) => {
    setStartDate(event.target.value);
  };
  const changeEndDateHandler = (event) => {
    setEndDate(event.target.value);
  };

  const addProjectHandler = () => {
    const newProject = {
      name,
      people,
      startDate,
      endDate,
    };

    onSaveProject(newProject);
    setName("");
    setPeople("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <form className="project-form">
      <div className="new-project-controls">
        <div className="new-project-control">
          <label>Nombre</label>
          <input
            onChange={changeNameHandler}
            type="text"
            className="input-control"
            value={name}
          />
        </div>
        <div className="new-project-control">
          <label>Participantes</label>
          <input
            onChange={changePeopleHandler}
            type="text"
            className="input-control"
            value={people}
          />
        </div>
        <div className="new-project-control">
          <label>Fecha Inicio</label>
          <input
            onChange={changeStartDateHandler}
            type="date"
            value={startDate}
            className="input-control"
          />
        </div>
        <div className="new-project-control">
          <label>Fecha Fin</label>
          <input
            onChange={changeEndDateHandler}
            type="date"
            value={endDate}
            className="input-control"
          />
        </div>
      </div>
      <div className="new-project-actions">
        <Button>Cancelar</Button>
        <Button onClick={addProjectHandler}>Agregar Proyecto</Button>
      </div>
    </form>
  );
};

export default AddNewProject;
