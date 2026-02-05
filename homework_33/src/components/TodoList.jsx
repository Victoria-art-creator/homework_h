import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} from "../store/todosSlice.js";

export default function TodoList() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.todos);

  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = () => {
    if (!text.trim()) {
      setError("Field cannot be empty");
      return;
    }
    dispatch(addTodo({ title: text, completed: false }));
    setText("");
    setError("");
  };

  const handleSave = (todo) => {
    dispatch(
      updateTodo({
        id: todo.id,
        data: { ...todo, title: editText },
      }),
    );
    setEditId(null);
    setEditText("");
  };

  return (
    <div>
      <h2>Todos</h2>

      <input
        placeholder="input"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {loading && <p>Loading...</p>}

      <ul>
        {Array.isArray(items) &&
          items.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() =>
                  dispatch(
                    updateTodo({
                      id: todo.id,
                      data: { ...todo, completed: !todo.completed },
                    }),
                  )
                }
              />

              {editId === todo.id ? (
                <>
                  <input
                    value={editText}
                    onChange={(event) => setEditText(event.target.value)}
                  />
                  <button onClick={() => handleSave(todo)}>Save</button>
                  <button onClick={() => setEditId(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <span>{todo.title}</span>
                  <button
                    onClick={() => {
                      setEditId(todo.id);
                      setEditText(todo.title);
                    }}
                  >
                    Edit
                  </button>
                </>
              )}

              <button onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
