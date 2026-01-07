import "./main.scss";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";

const form = $(".js--form");
const input = $(".js--form__input");
const todosWrapper = $(".js--todos-wrapper");

let todos = [];

// Load saved todos from localStorage
if (localStorage.getItem("todos")) {
  try {
    todos = JSON.parse(localStorage.getItem("todos"));
  } catch (error) {
    todos = [];
  }
}

renderTodos();

// Add new todo
form.on("submit", (event) => {
  event.preventDefault();

  const text = input.val().trim();
  if (!text) return;

  const newTodo = {
    id: Date.now(),
    text: text,
    done: false,
  };

  todos.push(newTodo);
  saveTodos();
  renderTodos();
  input.val("");
});

// event delegation: toggle, delete, open modal
todosWrapper
  .on("change", 'input[type="checkbox"]', function () {
    const id = Number($(this).closest("li").data("id"));
    toggleTodo(id);
  })
  .on("click", ".todo-item__delete", function () {
    const id = Number($(this).closest("li").data("id"));
    deleteTodo(id);
  })
  .on("click", ".todo-item__description", function () {
    const $li = $(this).closest("li");
    const id = Number($li.data("id"));
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    // show modal with bootstrap
    $("#todoModalBody").text(todo.text);
    const modalEl = document.getElementById("todoModal");
    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();
  });

// Save todos to localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Render todos in HTML
function renderTodos() {
  todosWrapper.empty();
  if (!todos.length) {
    todosWrapper.append(
      '<li class="text-center text-muted">There are no tasks</li>'
    );
    return;
  }

  todos.forEach((todo) => {
    // Create one todo element
    const li = $("<li>").addClass("todo-item").attr("data-id", todo.id);

    if (todo.done) {
      li.addClass("todo-item--checked");
    }

    // Checkbox
    const checkbox = $('<input type="checkbox">').prop("checked", !!todo.done);

    // Text
    const span = $("<span>")
      .addClass("todo-item__description")
      .text(todo.text)
      .attr("title", "Click to see");

    // Delete button
    const delBtn = $(
      '<button class="todo-item__delete btn btn-sm">Delete</button>'
    );

    li.append(checkbox, span, delBtn);

    todosWrapper.append(li);
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

import pragueImg from "./pexels-jason-v-2158569237-35464406.jpg";

const img = document.createElement("img");
img.src = pragueImg;
img.alt = "Prague";
img.width = 300;
img.height = 300;

document.body.appendChild(img);
