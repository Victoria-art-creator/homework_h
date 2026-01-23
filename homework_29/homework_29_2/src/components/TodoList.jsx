import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="todo-app">
      <div className="title">TODO</div>

      <TodoForm />

      <div className="subtitle">TODOS</div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>

      <footer className="todo-footer">Total todos: {todos.length}</footer>
    </div>
  );
};

export default TodoList;
