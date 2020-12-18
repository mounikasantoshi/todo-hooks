import React, { Component } from "react";
import Heading from "./Heading";
import NewTodo from "./NewTodo";
import TodosList from "./TodosList";

export class Todo extends Component {
  state = {
    todos: [
      { title: "standup meet by 10", completed: false },
      { title: "meeting with product manager", completed: true },
      { title: "standup meet of updates by 6", completed: false },
    ],
    todo: { title: "", completed: false },
    currentTodo: 0,
  };
  onclick = (e) => {
    this.setState({
      todos: this.state.todos.map((todo, i) => {
        if (i == e.target.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    });
  };

  onchange = (e) => {
    this.setState({ todo: { ...this.state.todo, title: e.target.value } });
  };
  handleSubmit = () => {
    this.setState({
      todos: [...this.state.todos, this.state.todo],
      todo: { ...this.state.todo, title: "" },
    });
  };
  render() {
    return (
      <div>
        <Heading />
        <TodosList todos={this.state.todos} onclick={this.onclick} />
        <NewTodo
          todo={this.state.todo}
          onchange={this.onchange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Todo;
