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
    </div>
  );
}

export default App;
