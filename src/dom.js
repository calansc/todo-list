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
  const dropDownBox = document.getElementsByClassName("dropDownBox");
  while (dropDownBox[0].firstChild) {
    dropDownBox[0].removeChild(dropDownBox[0].lastChild);
  }
  dropDownBox[0].appendChild(projectTabs());
  const projectButtons = document.createElement("div");
  projectButtons.classList.add("projectButtons");
  dropDownBox[0].appendChild(projectButtons);
  projectButtons.appendChild(createProject());
  projectButtons.appendChild(removeProject());
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
