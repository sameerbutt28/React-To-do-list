import { useState } from "react";

function App() {
  const [line, setLine] = useState([]);
  const [text, setText] = useState("");
  const handleTaskChange = (e) => {
    setText(e.target.value);
  };
 
  const addTask = () => {
    if (text) {
      // this statement shows that it the text field has soem text in it only then the blow code will run otherwise the below code will not be executed.

      setLine([...line, text]);
      setText("");
    }
  };
  
  const handleDelete = (indexDelete) => { //  "_" we also use this underscore as a convention because our main is target is approaching the index and deleteing the line on that index
    setLine(line.filter((text, index) => index !== indexDelete));
  };
  return (
    <div>
      <h1>To-Do List</h1>
      <input type="text" value={text} onChange={handleTaskChange} />
      <button onClick={addTask}>Add</button>
      <ol>
        {line.map((text, index) => (
          <li
            key={index}
          >

            {" "}
            {text}
          
            <button onClick={() => handleDelete(index)}>Delete</button>

          </li>
        ))}
      </ol>
       {/* <TodoList/> */}
    </div>
   
  );
}

export default App;