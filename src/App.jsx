import { useState } from "react";
import Menu from "./Menu";
import Counter from "./Counter";
import Todo from "./ToDoList";
import Form from "./FormExample";
import TodoList from "./ToDoList";
import FormExample from "./FormExample";

function App() {
  const [activeComponent, setActiveComponent] = useState("counter");

  const renderComponent = () => {
    switch (activeComponent) {
      case "counter":
        return <Counter />;
      case "todolist":
        return <TodoList />;
      case "formexample":
        return <FormExample />;
      default:
        return <Counter />;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Menu setActiveComponent={setActiveComponent} />
      <div style={{ flex: 1, padding: "20px" }}>
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;
