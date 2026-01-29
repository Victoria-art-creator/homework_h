import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  Stack,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function Todo() {
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addOrEditTodo = () => {
    if (!text) return;

    if (editIndex !== null) {
      const updated = [...todos];
      updated[editIndex] = text;
      setTodos(updated);
      setEditIndex(null);
    } else {
      setTodos([...todos, text]);
    }
    setText("");
  };

  const editTodo = (index) => {
    setText(todos[index]);
    setEditIndex(index);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <Stack spacing={2}>
      <TextField
        label="New todo"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button variant="contained" onClick={addOrEditTodo}>
        {editIndex !== null ? "Save" : "Add"}
      </Button>
      <List>
        {todos.map((todo, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <>
                <IconButton onClick={() => editTodo(index)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => deleteTodo(index)}>
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            {todo}
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
