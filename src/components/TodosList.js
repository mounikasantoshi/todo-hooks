import React from "react";

export default function TodosList(props) {
  return (
    <div>
      {props.todos.map((todo, i) => (
        <div>
          <input onClick={props.onclick} id={i} type="checkbox" />
          <span className={todo.completed == true && "completed"}>
            {todo.title}
          </span>
        </div>
      ))}
    </div>
  );
}
