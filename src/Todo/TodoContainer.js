import React from "react";
import "../App.css";
import TodosList from "./TodosList.js";
import Header from "./Header.js";
import InputTodo from "./InputTodo";
import uuid from "uuid";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuid.v4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Deploy to live server",
        completed: false
      }
    ]
  };

  handleChange = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };

  addTodoItem = title => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    );
  }
}

export default TodoContainer;
