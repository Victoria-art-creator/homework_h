import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: Date.now(), text }]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      <h2>Todo List</h2>

      <TodoForm onAddTodo={addTodo} />

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onRemove={removeTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
