import React from "react";

export default function NewTodo({ todo, onchange, handleSubmit }) {
  return (
    <div>
      <input type="text" value={todo.title} onChange={onchange} />
      <input type="submit" value="submit" onClick={handleSubmit} />
    </div>
  );
}
