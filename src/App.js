import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons';

import './App.css';

function App() {

  // Tasks (ToDo List) State
  const [toDo, setToDo] = useState([
    {id: 1, title: "Task 1", status: false},
    {id: 2, title: "Task 2", status: false},
  ]);

  // Temp State
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // Add Task
  const addTask = () => {

  }

  // Delete Task
  const deleteTask = (id) => {

  }

  // Mask task as done
  const markDone = (id) => {

  }

  // Cancel Update
  const cancelUpdate = () => {

  }

  // Change task for update
  const changeTask = (e) => {

  }

  // Update Task
  const updateTask = () => {

  }

  return (
    <div className="container App">
      <br /><br />
      <h2>To Do List App (ReactJS)</h2>
      <br /><br />

      {toDo && toDo.length ? '' : 'No Tasks...'}

      {toDo && toDo
        .sort((a,b) => a.id > b.id ? 1 : -1)
        .map( (task, index) => {
          return(
            <React.Fragment key={task.id}>

              <div className="col taskBg">
                <div className={task.status ? 'done' : ''}>
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskText">{task.title}</span>
                </div>
                <div className="iconsWrap">
                  <span title="Completed / Not Completed">
                    <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                  </span>
                  <span title="Edit">
                    <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                  </span>
                  <span title="Delete">
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                  </span>
                </div>
              </div>
            </React.Fragment>
          )
        })
      }

    </div>
  );
}

export default App;
