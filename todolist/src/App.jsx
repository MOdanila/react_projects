import { useState } from "react";
import "./general.css";
import { List } from "./components/list";
import { Header } from "./components/header";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleRemoveTask = (newTasks) => {
    setTasks(newTasks);
  };

  return (
    <div>
      <h1 className="title">To-Do List</h1>
      <Header onAddTask={handleAddTask} />
      <List tasks={tasks} onRemoveTask={handleRemoveTask} />
    </div>
  );
}
export default App;
