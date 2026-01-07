import React from "react";
function Menu({ setActiveComponent }) {
  return (
    <div style={{ width: "220px", borderRight: "1px solid #ddd", padding: "15px" }}>
      <h3>Programs</h3>

      <button onClick={() => setActiveComponent("counter")}>
        Counter PROGRAM-1
      </button>

      <br /><br />

      <button onClick={() => setActiveComponent("todolist")}>
        Todo List PROGRAM-2
      </button>

      <br /><br />

      <button onClick={() => setActiveComponent("formexample")}>
        Form Submit PROGRAM-3
      </button>
    </div>
  );
}

export default Menu;
