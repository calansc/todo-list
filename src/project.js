export {
  projectList,
  createProject,
  projectTabs,
  addProjectPopup,
  removeProject,
  removeProjectPopup,
  resetSelectedProject,
};
import { headerRefresh, contentRefresh } from "./dom.js";
import { displayTodoList } from "./todo.js";
import { populateStorage } from "./storage.js";
import Add from "./add.svg";
import Delete from "./close.svg";

// let projectList = ["project 1", "project 2"];
let projectList = [];

function createProject() {
  const add = new Image();
  add.src = Add;
  add.textContent = "Add Project";
  add.classList.add("addProject");
  return add;
}
function removeProject() {
  const remove = new Image();
  remove.src = Delete;
  // remove.textContent = "Remove Project";
  remove.classList.add("removeProject");
  return remove;
}

// const edit = new Image();
// edit.src = Edit;
// edit.classList.add("editTodo");
// edit.classList.add([i]);
// // edit.textContent = "Edit";
// edit.addEventListener(
//   "click",
//   function () {
//     editTodo(todoList[i], i);
//   },
//   false
// );

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
  if (projectList.length === 0) {
    projectList.push(projectName);
  } else if (projectList.length > 0) {
    for (let i = 0; i < projectList.length; i++) {
      if (projectList[i] === projectName) {
        alert("Project already exists");
        break;
      } else if ((i = projectList.length)) {
        projectList.push(projectName);
      }
    }
  }
  // console.log(projectList);
  document.querySelector(".addPopup").style.display = "none";
  contentRefresh();
  headerRefresh();
  populateStorage();
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
  console.log("Selected " + projectName);
  console.log("Initial project list: " + projectList);
  for (let i = 0; i < projectList.length; i++) {
    if (projectList[i] === projectName) {
      console.log("P-list ivalue: " + projectList[i]);
      let removed = projectList.splice(i, 1);
    }
    console.log("After list: " + projectList);
    // document.querySelector(".addPopup").style.display = "none";
    contentRefresh();
    headerRefresh();
    populateStorage();
  }
}

function projectTabs() {
  const tabs = document.createElement("div");
  tabs.classList.add("tabs");
  // tabs.textContent = "My Projects";
  const tab = document.createElement("div");
  tab.classList.add("projectTab");
  tab.classList.add("selectedTab");
  tab.textContent = "All Projects";
  // tab.addEventListener("click", function () {
  //   const content = document.getElementById("content");
  //   while (content.firstChild) {
  //     content.removeChild(content.lastChild);
  //   }
  //   content.appendChild(displayTodoList());
  // });
  tab.addEventListener("click", function () {
    contentRefresh();
    resetSelectedProject();
    tab.classList.add("selectedTab");
    let w = window.screen.width;
    if (w < 800) {
      console.log(w);
      let ddb = document.querySelector(".dropDownBox");
      ddb.style.display = "none";
      headerRefresh();
    }
  });
  tabs.appendChild(tab);
  for (let i = 0; i < projectList.length; i++) {
    const tab = document.createElement("div");
    tab.classList.add("projectTab");
    tab.textContent = projectList[i];
    tab.addEventListener("click", function () {
      // console.log(projectList[i] + " eventlistener");
      sortTodos(projectList[i]);
      resetSelectedProject();
      tab.classList.add("selectedTab");
      let w = window.screen.width;
      if (w < 800) {
        console.log(w);
        let ddb = document.querySelector(".dropDownBox");
        ddb.style.display = "none";
        headerRefresh();
      }
    });
    tabs.appendChild(tab);
  }
  return tabs;
}

function sortTodos(project) {
  contentRefresh();

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

function resetSelectedProject() {
  for (
    let i = 0;
    i < document.querySelectorAll(".tabs > .projectTab").length;
    i++
  ) {
    document
      .querySelectorAll(".tabs > .projectTab")
      [i].classList.remove("selectedTab");
  }
}
