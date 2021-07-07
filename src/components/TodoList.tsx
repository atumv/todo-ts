import React from "react";
import TodoItem from "./TodoItem";
import { ITodo } from "../Interfaces";

type TodoListProps = {
  todos: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};

const TodoList = ({ todos, toggleTodo, removeTodo }: TodoListProps) => (
  <ul className="todo-list">
    {todos.map((todo: ITodo, index: number) => (
      <TodoItem
        todo={todo}
        key={todo.id}
        index={index}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
    ))}
  </ul>
);

export default TodoList;
