const TodoItem = ({ todo, onRemove }) => {
  return (
    <li style={{ display: "flex", gap: 8 }}>
      <span>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>✕</button>
    </li>
  );
};

export default TodoItem;
