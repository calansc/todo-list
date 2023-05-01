export { headerRefresh, contentRefresh };
import { addTodo, addPopup } from "./addTodo.js";
import { displayTodoList, todoList } from "./todo";
import {
  projectTabs,
  createProject,
  removeProject,
  addProjectPopup,
  removeProjectPopup,
} from "./project";

function headerRefresh() {
  const header = document.getElementById("header");
  const sidebar = document.getElementById("sidebar");
  while (sidebar.firstChild) {
    sidebar.removeChild(sidebar.lastChild);
  }
  // header.appendChild(addTodo());
  sidebar.appendChild(projectTabs());
  const projectButtons = document.createElement("div");
  projectButtons.classList.add("projectButtons");
  sidebar.appendChild(projectButtons);
  projectButtons.appendChild(createProject());
  projectButtons.appendChild(removeProject());
  const addButton = document.querySelector(".addTodo");
  addButton.addEventListener("click", addPopup, false);
  const addProject = document.querySelector(".addProject");
  addProject.addEventListener("click", addProjectPopup, false);
  const removeProjectButton = document.querySelector(".removeProject");
  removeProjectButton.addEventListener("click", removeProjectPopup, false);
}
function contentRefresh() {
  const content = document.getElementById("content");
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  content.appendChild(displayTodoList());
}
