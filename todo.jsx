

import  { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    if (text) {
      setTasks([...tasks, { text, marked: false }]);
      setText("");
    }
  };

  const toggleMark = (index) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[index] = { ...newTasks[index], marked: !newTasks[index].marked };
      return newTasks;
    });
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.marked ? "line-through" : "none" }}
          >
            {task.text}
            <button onClick={() => toggleMark(index)}>Toggle Strikethrough</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
