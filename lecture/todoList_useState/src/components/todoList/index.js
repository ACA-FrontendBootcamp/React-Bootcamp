import React, { useState } from "react";
import Todo from "../todo";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todoes, setTodoes] = useState([]);

  const addTodo = () => {
    setTodoes(
      (prev) => [
        ...prev,
        { title: inputValue, id: Math.random(), isDone: false },
      ] // the first time prev is []
    );
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const deleteTodo = (id) => {
    setTodoes((prev) => prev.filter((item) => item.id != id));
  };

  const editTodo = (id, newTitle) => {
    console.log("newTitle", newTitle);
    setTodoes((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.title = newTitle;
        }
        return todo;
      })
    );
  };

  const completeTodo = (id) => {
    setTodoes((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      })
    );
  };

  return (
    <div className="todoListWrapper">
      <div className="todoList">
        <div className="addTodo">
          <input value={inputValue} onChange={handleInputChange} type="text" />
          <button disabled={!inputValue} onClick={addTodo}>
            ADD
          </button>
        </div>
        <div className="todoes">
          {todoes.map((item) => (
            <Todo
              completeTodo={completeTodo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
              {...item}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
