import React from "react";

export default function NewTodo(props) {
  return (
    <div>
      <input type="text" value={props.todo.title} onChange={props.onchange} />
      <input type="submit" value="submit" onClick={props.handleSubmit} />
    </div>
  );
}
