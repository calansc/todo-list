import { sub } from "date-fns";
import { newTodo, displayTodoList } from "./todo.js";
import { projectList } from "./project.js";
export { addTodo, addPopup };

function addTodo() {
  const button = document.createElement("button");
  button.textContent = "Add Todo";
  button.classList.add("addTodo");
  const addButton = document.querySelector(".addTodo");
  return button;
}

const todoAddKey = ["name", "description", "dueDate", "priority", "project"];
const todoAddText = [
  "New Todo:",
  "Description:",
  "Due Date:",
  "Priority:",
  "Project:",
];
const todoAddPlaceholder = [
  "Task Name",
  "Task Description...",
  "",
  "",
  "Project?",
];
const priorityList = ["high", "normal", "low"];

function addPopup() {
  const addPopup = document.createElement("div");
  addPopup.classList.add("addPopup");
  addPopup.style.display = "block";
  addPopup.style.width = "200px";
  addPopup.style.height = "240px";
  addPopup.style.border = "red solid 2px";
  addPopup.style.backgroundColor = "white";
  addPopup.style.position = "absolute";
  addPopup.style.top = "100px";
  addPopup.style.left = "100px";
  const form = document.createElement("form");
  form.setAttribute("id", "form");
  form.setAttribute("action", "/");
  form.setAttribute("method", "GET");

  for (let i = 0; i < todoAddKey.length; i++) {
    if (todoAddKey[i] === "name" || todoAddKey[i] === "description") {
      const div = document.createElement("div");
      div.classList.add("formDiv");
      const label = document.createElement("label");
      label.setAttribute("for", todoAddKey[i]);
      label.textContent = todoAddText[i];
      const input = document.createElement("input");
      input.setAttribute("id", todoAddKey[i]);
      input.setAttribute("name", todoAddKey[i]);
      input.setAttribute("placeholder", todoAddPlaceholder[i]);
      input.required = true;
      div.appendChild(label);
      div.appendChild(input);
      form.appendChild(div);
    }
    if (todoAddKey[i] === "dueDate") {
      const div = document.createElement("div");
      div.classList.add("formDiv");
      const label = document.createElement("label");
      label.setAttribute("for", todoAddKey[i]);
      label.textContent = todoAddText[i];
      const input = document.createElement("input");
      input.setAttribute("id", todoAddKey[i]);
      input.setAttribute("name", todoAddKey[i]);
      input.setAttribute("type", "date");
      //   input.setAttribute("placeholder", todoAddPlaceholder[i]);
      form.appendChild(label);
      form.appendChild(input);
      form.appendChild(div);
    }
    if (todoAddKey[i] === "priority") {
      const div = document.createElement("div");
      div.classList.add("formDiv");
      const label = document.createElement("label");
      label.setAttribute("for", todoAddKey[i]);
      label.textContent = todoAddText[i];
      const select = document.createElement("select");
      for (let j = 0; j < priorityList.length; j++) {
        const option = document.createElement("option");
        option.setAttribute("value", priorityList[j]);
        option.setAttribute("id", todoAddKey[i]);
        option.setAttribute("name", todoAddKey[i]);
        // option.setAttribute("selected");
        option.textContent = priorityList[j];
        select.appendChild(option);
      }
      div.appendChild(label);
      div.appendChild(select);
      form.appendChild(div);
    }
    if (todoAddKey[i] === "project") {
      const div = document.createElement("div");
      div.classList.add("formDiv");
      const label = document.createElement("label");
      label.setAttribute("for", todoAddKey[i]);
      label.textContent = todoAddText[i];
      const select = document.createElement("select");
      for (let j = 0; j < projectList.length; j++) {
        const option = document.createElement("option");
        option.setAttribute("value", projectList[j]);
        option.setAttribute("id", todoAddKey[i]);
        option.setAttribute("name", todoAddKey[i]);
        // option.setAttribute("selected");
        option.textContent = projectList[j];
        select.appendChild(option);
      }
      div.appendChild(label);
      div.appendChild(select);
      form.appendChild(div);
    }
  }

  const add = document.createElement("input");
  add.setAttribute("type", "submit");
  add.setAttribute("name", "submit");
  add.setAttribute("value", "Add Todo");
  add.setAttribute("alt", "Submit");
  const close = document.createElement("input");
  close.setAttribute("type", "reset");
  close.setAttribute("name", "close");
  close.setAttribute("value", "Close");
  close.setAttribute("alt", "Close");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addForm();
  });
  form.addEventListener("reset", (e) => {
    e.preventDefault();
    closeForm("addPopup");
  });

  form.appendChild(add);
  form.appendChild(close);
  addPopup.appendChild(form);
  content.appendChild(addPopup);
  return addPopup;
}

function addForm() {
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let dueDate = document.getElementById("dueDate").value;
  let priority = document.getElementById("priority").value;
  let project = document.getElementById("project").value;
  newTodo(name, description, dueDate, priority, project);
  document.querySelector(".addPopup").style.display = "none";
  const content = document.getElementById("content");
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  content.appendChild(displayTodoList());
}

function closeForm(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}
