import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import React, {useState} from 'react'

function TasksForm({onAddTask}) {

const initialTaskData= {
    task: "", 
}

const [task, setTask]= useState(""); 

function handleSubmit(event) {
    event.preventDefault(); 
    event.target.reset();
    fetch("http://localhost:9292/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({ 
        task: task,
      
        
      }),
    })
    .then((resp) => resp.json())
    .then((newTask) => onAddTask(newTask))
  }

  return (
    <form onSubmit= {handleSubmit}>
        <input
        className='tasksform-input'
        type="text"
        name="tasks"
        value={task.user_id}
        placeholder="There's more that I want to do!"
        onChange= {(event) => setTask(event.target.value)}
        />
        <br></br>

        <button 
        className='tasksform-button'
        type="submit">Let's Add It
        </button>
    </form>
  )
}

export default TasksForm