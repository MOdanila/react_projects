import React from "react";
import { useState } from "react";

export function List(props) {
  const [clickedtask, setclickedtask] = useState(null);
  if (props.tasks.length === 0) {
    return <div>No tasks</div>;
  }
  const onUpdateTasks = (index, newTask) => {
    const updatedTasks = [...props.tasks];
    updatedTasks[index] = newTask;
    props.onRemoveTask(updatedTasks);
  };
  const handleRemoveTask = (index) => {
    const newTasks = props.tasks.filter((_, i) => i !== index);
    props.onRemoveTask(newTasks);
  };
  const handleClick = (task) => {
    if (clickedtask === task) {
      setclickedtask(null);
    } else {
      setclickedtask(task);
    }
  };
  return (
    <div className="list">
      <ul>
        {props.tasks.map((task, index) => (
          <li key={index} className="task" onClick={() => handleClick(task)}>
            {clickedtask === task ? (
              <div>
                {task}
                <button
                  className="remove"
                  onClick={() => handleRemoveTask(index, alert("Task removed"))}
                >
                  Remove Task
                </button>
                <button
                  className="edit"
                  onClick={() =>
                    onUpdateTasks(index, prompt("Enter new task:"))
                  }
                >
                  Edit Task
                </button>
              </div>
            ) : (
              <div>{task}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
