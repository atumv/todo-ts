import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import NoTasksMessage from "./components/NoTasksMessage";
import "./styles/style.css";
import "./styles/media.css";
import { ITodo } from "./Interfaces";

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (title: string): void => {
    const newTodos = [
      ...todos,
      ...[{ title, id: Date.now(), completed: false }]
    ];
    setTodos(newTodos);
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    );
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const inputValue = e.currentTarget.add.value.trim();
    if (inputValue) addTodo(inputValue);
    e.currentTarget.add.value = "";
  };

  return (
    <div className="wrapper">
      <Header />
      <Form onSubmit={handleSubmit} />
      {!todos.length ? (
        <NoTasksMessage />
      ) : (
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      )}
    </div>
  );
};

export default App;
