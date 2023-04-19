// import { format, formatDistance } from "date-fns";
import { todoList, newTodo, displayTodoList } from "./todo.js";
// import { addTodo, addPopup } from "./addTodo.js";
// import {
//   createProject,
//   removeProject,
//   projectList,
//   projectTabs,
//   addProjectPopup,
//   removeProjectPopup,
// } from "./project.js";
import { headerRefresh, contentRefresh } from "./dom.js";
import "./style.css";

newTodo("testname", "test description", "2/2/22", "high", "project 1");
newTodo("test2", "test 2 descript", "test 2 date?", "normal", "project 1");
newTodo("test3", "description 3", "3/3/2023", "low", "project 2");
newTodo("test4", "4 de", "2/2/22", "high", "project 2");

const header = document.getElementById("header");
const content = document.getElementById("content");
contentRefresh();
headerRefresh();
