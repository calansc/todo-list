// import { format, formatDistance } from "date-fns";
import { todoList, newTodo, displayTodoList } from "./todo.js";
import { addTodo, addPopup } from "./addTodo.js";
import {
  createProject,
  projectList,
  projectTabs,
  addProjectPopup,
} from "./project.js";
import "./style.css";

newTodo("testname", "test description", "2/2/22", 3, "project 1");
newTodo("test2", "test 2 descript", "test 2 date?", 2, "project 1");
newTodo("test3", "description 3", "3/3/2023", 1, "project 2");
newTodo("test4", "4 de", "2/2/22", 3);

const header = document.getElementById("header");
const content = document.getElementById("content");
content.appendChild(displayTodoList());
header.appendChild(addTodo());
header.appendChild(projectTabs());
header.appendChild(createProject());

const addButton = document.querySelector(".addTodo");
addButton.addEventListener("click", addPopup, false);

const addProject = document.querySelector(".addProject");
addProject.addEventListener("click", addProjectPopup, false);
