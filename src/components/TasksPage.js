import React, { useState, useEffect } from 'react';

import TasksForm from './TasksForm';
import TasksList from './TasksList';
import NavBar from './NavBar';

function TasksPage() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/tasks")
      .then((resp) => resp.json())
      .then((tasksArray) => {
        setTasks(tasksArray);
      });
  }, []);

  function handleAddTask(newTask) {
    const updatedTasksArray = [...tasks, newTask];
    setTasks(updatedTasksArray);
  }

  function handleDeleteTask(id) {
    const updatedTasksArray = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasksArray);
  }

  function handleUpdateTask(updatedTask) {
    const updatedTasksArray = tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      } else {
        return task;
      }
    });
    setTasks(updatedTasksArray);
  }

  const displayedTasks = tasks.filter((task) => {
    return task.task
  });


  return (
    <>
      <NavBar />

      <br></br>
      <br></br>

      {/* <hr className='taskpage-top-line'></hr> */}
      <p className='taskpage-intentions-title'>Today, my goals are to complete:</p>
      <hr></hr>

      <TasksForm
        onAddTask={handleAddTask} />

      <TasksList
        tasks={displayedTasks}
        onDeleteTask={handleDeleteTask}
        onUpdateTask={handleUpdateTask}
      />
    </>
  )
}

export default TasksPage;