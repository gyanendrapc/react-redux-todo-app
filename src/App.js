import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";

const todoList = [
  {
    item: "todos",
    done: true,
    id: 123456789,
  },
  {
    item: "todos2",
    done: true,
    id: 1234567899,
  },
];

function App() {
  return (
    <div className="App">
      <h2>My Todo</h2>
      <br />
      {/* todo list */}
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map((item) => {
            <TodoItem name={item.item} done={item.done} id={item.id} />;
          })}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
