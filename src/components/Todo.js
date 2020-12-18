import React, { useState } from "react";
import Heading from "./Heading";
import NewTodo from "./NewTodo";
import TodosList from "./TodosList";

export function Todo() {
  // const [text, settext] = useState({})
  const [todos, settodos] = useState([
    { title: "standup meet by 10", completed: false },
    { title: "meeting with product manager", completed: true },
    { title: "standup meet of updates by 6", completed: false },
  ]);

  const [todo, settodo] = useState({ title: "", completed: false });

  const onclick = (e) => {
    settodos(
      todos.map((todo, i) => {
        if (i == e.target.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const onchange = (e) => {
    settodo({ ...todo, title: e.target.value });
  };
  const handleSubmit = () => {
    settodos([...todos, todo]);
    settodo({ ...todo, title: "" });
  };

  return (
    <div>
      <Heading />
      <TodosList todos={todos} onclick={onclick} />
      <NewTodo todo={todo} onchange={onchange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default Todo;
