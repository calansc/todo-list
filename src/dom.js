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
  while (header.firstChild) {
    header.removeChild(header.lastChild);
  }
  header.appendChild(addTodo());
  header.appendChild(projectTabs());
  header.appendChild(createProject());
  header.appendChild(removeProject());
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
