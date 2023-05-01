import { format } from "date-fns";
import { newTodo, displayTodoList, todoList } from "./todo.js";
import { projectList, resetSelectedProject } from "./project.js";
import { headerRefresh, contentRefresh } from "./dom.js";
import Add from "./add.svg";
export { addTodo, addPopup, editTodo };

function addTodo() {
  const add = new Image();
  add.src = Add;
  add.textContent = "Add Todo";
  add.classList.add("addTodo");
  // const addButton = document.querySelector(".addTodo");
  return add;
}

const todoAddKey = ["name", "description", "dueDate", "priority", "project"];
const todoAddText = [
  "Todo Name:",
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
      input.required = true;
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
      select.setAttribute("id", todoAddKey[i]);
      select.setAttribute("name", todoAddKey[i]);
      for (let j = 0; j < priorityList.length; j++) {
        const option = document.createElement("option");
        option.setAttribute("value", priorityList[j]);

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
      select.setAttribute("name", todoAddKey[i]);
      select.setAttribute("id", todoAddKey[i]);
      for (let j = 0; j < projectList.length; j++) {
        const option = document.createElement("option");
        option.setAttribute("value", projectList[j]);
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
  dueDate = format(new Date(dueDate), "M/d/yy");
  let priority = document.getElementById("priority").value;
  let project = document.getElementById("project").value;
  newTodo(name, description, dueDate, priority, project);
  document.querySelector(".addPopup").style.display = "none";
  contentRefresh();
  resetSelectedProject();
  let tabs = document.querySelector(".tabs");
  tabs.firstChild.classList.add("selectedTab");
}

function closeForm(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

function editTodo(thisArray, todoListId) {
  // console.log(thisArray);
  // console.log(todoListId);
  const editPopup = document.createElement("div");
  editPopup.classList.add("addPopup");
  editPopup.style.display = "block";
  editPopup.style.width = "200px";
  editPopup.style.height = "240px";
  editPopup.style.border = "red solid 2px";
  editPopup.style.backgroundColor = "white";
  editPopup.style.position = "absolute";
  editPopup.style.top = "100px";
  editPopup.style.left = "100px";
  const form = document.createElement("form");
  form.setAttribute("id", "form");
  form.setAttribute("action", "/");
  form.setAttribute("method", "GET");

  for (let i = 0; i < thisArray.length; i++) {
    // console.log(thisArray[i]);
    if (todoAddKey[i] === "name") {
      const div = document.createElement("div");
      div.classList.add("formDiv");
      const label = document.createElement("label");
      label.setAttribute("for", todoAddKey[i]);
      label.textContent = todoAddText[i];
      const input = document.createElement("input");
      input.setAttribute("id", todoAddKey[i]);
      input.setAttribute("name", todoAddKey[i]);
      input.setAttribute("value", thisArray[i]);
      input.required = true;
      div.appendChild(label);
      div.appendChild(input);
      form.appendChild(div);
    }
    if (todoAddKey[i] === "description") {
      const div = document.createElement("div");
      div.classList.add("formDiv");
      const label = document.createElement("label");
      label.setAttribute("for", todoAddKey[i]);
      label.textContent = todoAddText[i];
      const input = document.createElement("input");
      input.setAttribute("id", todoAddKey[i]);
      input.setAttribute("name", todoAddKey[i]);
      input.setAttribute("value", thisArray[i]);
      form.appendChild(label);
      form.appendChild(input);
      form.appendChild(div);
    }
    if (todoAddKey[i] === "dueDate") {
      // console.log(thisArray[i]);
      let newDate = format(new Date(thisArray[i]), "yyyy-MM-dd");
      // console.log(newDate);
      const div = document.createElement("div");
      div.classList.add("formDiv");
      const label = document.createElement("label");
      label.setAttribute("for", todoAddKey[i]);
      label.textContent = todoAddText[i];
      const input = document.createElement("input");
      input.setAttribute("id", todoAddKey[i]);
      input.setAttribute("name", todoAddKey[i]);
      input.setAttribute("type", "date");
      input.setAttribute("value", newDate);
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
      select.setAttribute("id", todoAddKey[i]);
      select.setAttribute("name", todoAddKey[i]);
      for (let j = 0; j < priorityList.length; j++) {
        const option = document.createElement("option");
        option.setAttribute("value", priorityList[j]);
        option.textContent = priorityList[j];
        select.appendChild(option);
        if (thisArray[i] === priorityList[j]) {
          option.setAttribute("selected", "selected");
        }
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
      select.setAttribute("name", todoAddKey[i]);
      select.setAttribute("id", todoAddKey[i]);
      for (let j = 0; j < projectList.length; j++) {
        const option = document.createElement("option");
        option.setAttribute("value", projectList[j]);
        option.textContent = projectList[j];
        select.appendChild(option);
        if (thisArray[i] === projectList[j]) {
          option.setAttribute("selected", "selected");
        }
      }
      div.appendChild(label);
      div.appendChild(select);
      form.appendChild(div);
    }
  }

  const add = document.createElement("input");
  add.setAttribute("type", "submit");
  add.setAttribute("name", "submit");
  add.setAttribute("value", "Update Todo");
  add.setAttribute("alt", "Submit");
  const close = document.createElement("input");
  close.setAttribute("type", "reset");
  close.setAttribute("name", "close");
  close.setAttribute("value", "Close");
  close.setAttribute("alt", "Close");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    editForm(todoListId);
  });
  form.addEventListener("reset", (e) => {
    e.preventDefault();
    closeForm("addPopup");
  });

  form.appendChild(add);
  form.appendChild(close);
  editPopup.appendChild(form);
  content.appendChild(editPopup);
  return editPopup;
}

function editForm(todoListId) {
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let dueDate = document.getElementById("dueDate").value;
  let dueDateReplace = new Date(dueDate.replace(/-/g, "/"));
  let newDueDate = format(new Date(dueDateReplace), "M/d/yy");
  let priority = document.getElementById("priority").value;
  let project = document.getElementById("project").value;
  // console.log(todoListId);
  todoList[todoListId][0] = name;
  todoList[todoListId][1] = description;
  todoList[todoListId][2] = newDueDate;
  todoList[todoListId][3] = priority;
  todoList[todoListId][4] = project;
  document.querySelector(".addPopup").style.display = "none";
  contentRefresh();
  resetSelectedProject();
  let tabs = document.querySelector(".tabs");
  tabs.firstChild.classList.add("selectedTab");
}
