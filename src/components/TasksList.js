import React from 'react'
import TaskCard from './TaskCard'

function TasksList({ tasks, onDeleteTask, onUpdateTask }) {
  return (
    <ul className="tasks-list">
      {tasks.map((task) => {
        return (
          <TaskCard
            key={task.id}
            taskList={task}
            onDeleteTask={onDeleteTask}
            onUpdateTask={onUpdateTask}
          />
        );
      })}
    </ul>
  );
}

export default TasksList