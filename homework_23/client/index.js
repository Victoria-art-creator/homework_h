const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const list = document.getElementById("todosWrapper");

const API_URL = "http://localhost:8080/todos";

async function fetchTodos() {
  const res = await fetch(API_URL);
  const todos = await res.json();
  renderTodos(todos);
}

form.onsubmit = async (event) => {
  event.preventDefault();
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: input.value }),
  });
  input.value = "";
  fetchTodos();
};

async function toggleTodo(todo) {
  await fetch(`${API_URL}/${todo._id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ done: !todo.done }),
  });
  fetchTodos();
}

async function deleteTodo(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  fetchTodos();
}

function renderTodos(todos) {
  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    checkbox.onchange = () => toggleTodo(todo);

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.className = "flex-grow-1 ms-2";

    const btn = document.createElement("button");
    btn.textContent = "✖";
    btn.className = "btn btn-danger btn-sm";
    btn.onclick = () => deleteTodo(todo._id);

    li.append(checkbox, span, btn);
    list.append(li);
  });
}

fetchTodos();
