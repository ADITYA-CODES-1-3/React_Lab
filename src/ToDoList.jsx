import React, { useState } from "react";

function TodoList() {
 
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask(""); 
    }
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleToggle = (index) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>To-Do List</h2>

      <div style={{ display: "flex", marginBottom: "10px" }}>
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter a task"
          style={{ flex: 1, padding: "5px" }}
        />
        <button onClick={handleAdd} style={{ marginLeft: "5px" }}>
          Add
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "5px",
              background: "#f0f0f0",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
       
            <span
              onClick={() => handleToggle(index)}
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                cursor: "pointer",
                flex: 1,
              }}
            >
              {t.text}
            </span>

            <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;