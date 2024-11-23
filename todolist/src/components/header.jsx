import React from "react";
import { useState } from "react";

export function Header(props) {
  const [newTask, setNewTask] = useState("");
  const handleAddTask = () => {
    props.onAddTask(newTask);
    setNewTask("");
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        placeholder="Enter a new task"
        className="new-task-input"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}
