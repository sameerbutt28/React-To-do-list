import { useState } from "react";

function App() {
  const [line, setLine] = useState([]);
  const [text, setText] = useState("");
  const [marks, setMarks] = useState([]);

  const handleTaskChange = (e) => {
    setText(e.target.value);
  };

  const addTask = () => {
    if (text) {
      setLine([...line, text]);
      setMarks([...marks, false]);
      setText("");
    }
  };

  const handleMark = (indexMark) => {
    const updatedMarks = [...marks];
    updatedMarks[indexMark] = !updatedMarks[indexMark];
    setMarks(updatedMarks);
  };

  const handleDelete = (indexDelete) => {
    setLine(line.filter((text, index) => index !== indexDelete));
    setMarks(marks.filter((mark, index) => index !== indexDelete));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input type="text" value={text} onChange={handleTaskChange} />
      <button onClick={addTask}>Add</button>
      <ol>
        {line.map((text, index) => (
          <li key={index} style={{ textDecoration: marks[index] ? "line-through" : "none" }}>
            {text}
            &nbsp;
            <button onClick={() => handleMark(index)}>
              {marks[index] ? 'Unmark' : 'Mark'}
            </button>
            &nbsp;
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
