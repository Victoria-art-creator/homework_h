"use strict";

const form = document.querySelector(".js--form");
const input = document.querySelector(".js--form__input");
const todosWrapper = document.querySelector(".js--todos-wrapper");

let todos = [];

// Load saved todos from localStorage
if (localStorage.getItem("todos")) {
  todos = JSON.parse(localStorage.getItem("todos"));
  renderTodos();
}

// Add new todo
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();
  input.value.trim();

  const newTodo = {
    id: Date.now(),
    text,
    done: false,
  };

  todos.push(newTodo);
  saveTodos();
  renderTodos();

  input.value = "";
});

// Save todos to localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Create one todo element
function createTodoElement(todo) {
  const li = document.createElement("li");
  li.className = "todo-item";
  if (todo.done) li.classList.add("todo-item--checked");

  // Checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.done;
  checkbox.addEventListener("change", () => toggleTodo(todo.id));

  // Text
  const span = document.createElement("span");
  span.className = "todo-item__description";
  span.textContent = todo.text;

  // Delete button
  const button = document.createElement("button");
  button.className = "todo-item__delete";
  button.textContent = "Delete";
  button.addEventListener("click", () => deleteTodo(todo.id));

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);

  return li;
}

// Render todos in HTML
function renderTodos() {
  todosWrapper.innerHTML = "";

  todos.forEach((todo) => {
    const todoElement = createTodoElement(todo);
    todosWrapper.appendChild(todoElement);
  });
}

//  Mark todo as done/undone
function toggleTodo(id) {
  todos = todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t));

  saveTodos();
  renderTodos();
}

//  Delete todo
function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);

  saveTodos();
  renderTodos();
}
