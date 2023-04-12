// import { format, formatDistance } from "date-fns";
import { todoList, newTodo, displayTodoList } from "./todo.js";
import { addTodo, addPopup } from "./addTodo.js";
import { createProject, projectList } from "./project.js";
import "./style.css";

newTodo("test4", "4 de", "2/2/22", 3);

const header = document.getElementById("header");
const content = document.getElementById("content");
content.appendChild(displayTodoList());
header.appendChild(addTodo());

const addButton = document.querySelector(".addTodo");
addButton.addEventListener("click", addPopup, false);
