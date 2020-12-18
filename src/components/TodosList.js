import React from "react";

export default function TodosList({ onclick, todos }) {
  return (
    <div>
      {todos.map((todo, i) => (
        <div>
          <input onClick={onclick} id={i} type="checkbox" />
          <span className={todo.completed == true && "completed"}>
            {todo.title}
          </span>
        </div>
      ))}
    </div>
  );
}
