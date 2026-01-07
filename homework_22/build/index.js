"use strict";

require("./styles/main.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var form = $(".js--form");
var input = $(".js--form__input");
var todosWrapper = $(".js--todos-wrapper");
var todos = [];

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
form.on("submit", function (event) {
  event.preventDefault();
  var text = input.val().trim();
  if (!text) return;
  var newTodo = {
    id: Date.now(),
    text: text,
    done: false
  };
  todos.push(newTodo);
  saveTodos();
  renderTodos();
  input.val("");
});

// event delegation: toggle, delete, open modal
todosWrapper.on("change", 'input[type="checkbox"]', function () {
  var id = Number($(this).closest("li").data("id"));
  toggleTodo(id);
}).on("click", ".todo-item__delete", function () {
  var id = Number($(this).closest("li").data("id"));
  deleteTodo(id);
}).on("click", ".todo-item__description", function () {
  var $li = $(this).closest("li");
  var id = Number($li.data("id"));
  var todo = todos.find(function (t) {
    return t.id === id;
  });
  if (!todo) return;

  // show modal with bootstrap
  $("#todoModalBody").text(todo.text);
  var modalEl = document.getElementById("todoModal");
  var bsModal = new bootstrap.Modal(modalEl);
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
    todosWrapper.append('<li class="text-center text-muted">There are no tasks</li>');
    return;
  }
  todos.forEach(function (todo) {
    // Create one todo element
    var li = $("<li>").addClass("todo-item").attr("data-id", todo.id);
    if (todo.done) {
      li.addClass("todo-item--checked");
    }

    // Checkbox
    var checkbox = $('<input type="checkbox">').prop("checked", !!todo.done);

    // Text
    var span = $("<span>").addClass("todo-item__description").text(todo.text).attr("title", "Click to see");

    // Delete button
    var delBtn = $('<button class="todo-item__delete btn btn-sm">Delete</button>');
    li.append(checkbox, span, delBtn);
    todosWrapper.append(li);
  });
}

//  Mark todo as done/undone
function toggleTodo(id) {
  todos = todos.map(function (t) {
    return t.id === id ? _objectSpread(_objectSpread({}, t), {}, {
      done: !t.done
    }) : t;
  });
  saveTodos();
  renderTodos();
}

//  Delete todo
function deleteTodo(id) {
  todos = todos.filter(function (todo) {
    return todo.id !== id;
  });
  saveTodos();
  renderTodos();
}