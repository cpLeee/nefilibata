import React, { useState } from 'react'

function TaskCard({ taskList, onDeleteTask, onUpdateTask }) {
  const { id, day, task, user_id } = taskList;
  const [updatedTask, setUpdatedTask] = useState("");

  function handleTaskDeleteClick() {
    fetch(`http://localhost:9292/tasks/${id}`, {
      method: "DELETE",
    });

    onDeleteTask(id);
  }

  function handleTaskSubmit(e) {
    e.preventDefault();
    e.target.reset();
    fetch(`http://localhost:9292/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: updatedTask }),
    })
      .then((r) => r.json())
      .then((updatedTask) => {
        onUpdateTask(updatedTask);
      });
  }

  {/* <input type= "checkbox"></input> */ }
  return (
    <div className="task-item">
      <label className='tasks' key={task.id} user_id={task.user_id}>
        {task}
      </label>
      <label className="task-trash" onClick={handleTaskDeleteClick}>
        ✅
      </label>

      <form onSubmit={handleTaskSubmit}>
        <input
          className='tasklist-input'
          type="text"
          placeholder="Scratch That..."
          // value={updatedMemory}
          onChange={(e) => setUpdatedTask(e.target.value)}
        />
        <button className="taskcard-button"
          type="submit">✏️</button>
      </form>

    </div>
  )
}

export default TaskCard