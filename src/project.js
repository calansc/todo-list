export {
  projectList,
  createProject,
  projectTabs,
  addProjectPopup,
  removeProject,
  removeProjectPopup,
};
import { headerRefresh, contentRefresh } from "./dom.js";
import { displayTodoList } from "./todo.js";

let projectList = ["project 1", "project 2"];

function createProject() {
  const button = document.createElement("button");
  button.textContent = "Add Project";
  button.classList.add("addProject");
  return button;
}
function removeProject() {
  const button = document.createElement("button");
  button.textContent = "Remove Project";
  button.classList.add("removeProject");
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
  console.log(projectList);
  document.querySelector(".addPopup").style.display = "none";
  contentRefresh();
  headerRefresh();
}

function removeProjectPopup() {
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
  label.setAttribute("for", "removeProjectSelect");
  label.textContent = "Which project to remove?";
  const select = document.createElement("select");
  select.setAttribute("name", "removeProjectSelect");
  select.setAttribute("id", "removeProjectSelect");
  for (let j = 0; j < projectList.length; j++) {
    const option = document.createElement("option");
    option.setAttribute("value", projectList[j]);
    option.textContent = projectList[j];
    select.appendChild(option);
  }
  div.appendChild(label);
  div.appendChild(select);
  form.appendChild(div);

  const add = document.createElement("input");
  add.setAttribute("type", "submit");
  add.setAttribute("name", "submit");
  add.setAttribute("value", "Remove Project");
  add.setAttribute("alt", "Submit");
  const close = document.createElement("input");
  close.setAttribute("type", "reset");
  close.setAttribute("name", "close");
  close.setAttribute("value", "Close");
  close.setAttribute("alt", "Close");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    removeProjectForm();
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

function removeProjectForm() {
  let projectName = document.getElementById("removeProjectSelect").value;
  console.log(projectName);
  console.log("Initial project list: " + projectList);
  for (let i = 0; i < projectList.length; i++) {
    if (projectList[i] === projectName) {
      console.log("P-list ivalue: " + projectList[i]);
      let removed = projectList.splice(projectList[i], 1);
    }
    console.log("After list: " + projectList);
    // document.querySelector(".addPopup").style.display = "none";
    contentRefresh();
    headerRefresh();
  }
}

function projectTabs() {
  const tabs = document.createElement("div");
  tabs.classList.add("tabs");
  const tab = document.createElement("div");
  tab.classList.add("projectTab");
  tab.textContent = "All Todo's";
  tab.addEventListener("click", function () {
    const content = document.getElementById("content");
    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }
    content.appendChild(displayTodoList());
  });
  tabs.appendChild(tab);
  for (let i = 0; i < projectList.length; i++) {
    const tab = document.createElement("div");
    tab.classList.add("projectTab");
    tab.textContent = projectList[i];
    tab.addEventListener("click", function () {
      // console.log(projectList[i] + " eventlistener");
      sortTodos(projectList[i]);
    });
    tabs.appendChild(tab);
  }
  return tabs;
}

function sortTodos(project) {
  const content = document.getElementById("content");
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  content.appendChild(displayTodoList());
  let projectName = project;
  const projRef = document.querySelectorAll(".project");
  // console.log(projRef.length);
  for (let i = 0; i < projRef.length; i++) {
    if (projRef[i].innerHTML != projectName) {
      // console.log(projRef[i]);
      projRef[i].parentElement.parentElement.remove();
    }
  }
}
