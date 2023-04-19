export { projectList, createProject, projectTabs, addProjectPopup };
import { displayTodoList } from "./todo.js";

let projectList = ["project 1", "project 2"];
let pList = [];

function createProject() {
  const button = document.createElement("button");
  button.textContent = "Add Project";
  button.classList.add("addProject");
  const addProject = document.querySelector(".addProject");
  return button;
}

function addProjectPopup() {
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

  const div = document.createElement("div");
  div.classList.add("formDiv");
  const label = document.createElement("label");
  label.setAttribute("for", "projectName");
  label.textContent = "Project Name:";
  const input = document.createElement("input");
  input.setAttribute("id", "projectName");
  input.setAttribute("name", "projectName");
  input.setAttribute("placeholder", "New Project Name");
  input.required = true;
  div.appendChild(label);
  div.appendChild(input);
  form.appendChild(div);

  const add = document.createElement("input");
  add.setAttribute("type", "submit");
  add.setAttribute("name", "submit");
  add.setAttribute("value", "Add Project");
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

function closeForm(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

function addForm() {
  let projectName = document.getElementById("projectName").value;
  // console.log(projectList.length);
  for (let i = 0; i < projectList.length; i++) {
    if (projectList[i] === projectName) {
      alert("Project already exists");
      break;
    } else if ((i = projectList.length)) {
      projectList.push(projectName);
    }
  }
  // projectList.forEach()
  console.log(projectList);
  document.querySelector(".addPopup").style.display = "none";
  const content = document.getElementById("content");
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  content.appendChild(displayTodoList());
  const header = document.getElementById("header");
  const tabs = document.querySelector(".tabs");
  const addProjectButton = document.querySelector(".addProject");
  header.removeChild(tabs);
  header.removeChild(addProjectButton);
  header.appendChild(projectTabs());
  header.appendChild(createProject());
  const addProject = document.querySelector(".addProject");
  addProject.addEventListener("click", addProjectPopup, false);
}

function projectTabs() {
  const tabs = document.createElement("div");
  tabs.classList.add("tabs");
  const tab = document.createElement("div");
  tab.classList.add("projectTab");
  tab.textContent = "All Todo's";
  tabs.appendChild(tab);
  for (let i = 0; i < projectList.length; i++) {
    const tab = document.createElement("div");
    tab.classList.add("projectTab");
    tab.textContent = projectList[i];
    tab.addEventListener("click", function () {
      console.log(projectList[i]);
    });
    tabs.appendChild(tab);
    // working on tab event listener to sort todos
  }
  return tabs;
}
