// import { format, formatDistance } from "date-fns";
import { todoList, newTodo, displayTodoList } from "./todo.js";
// import { addTodo, addPopup } from "./popups.js";
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
import { storageAvailable } from "./storage.js";

newTodo("testname", "test description", "2/03/22", "high", "project 1");
newTodo("test2", "test 2 descript", "5/15/24", "normal", "project 1");
newTodo("test3", "description 3", "3/03/2023", "low", "project 2");
newTodo("test4", "4 de", "2/02/22", "high", "project 2");

const header = document.getElementById("header");
const content = document.getElementById("content");
contentRefresh();
headerRefresh();

if (storageAvailable("localStorage")) {
  console.log("Yippee! We can use localStorage awesomeness");
} else {
  console.log("Too bad, no localStorage for us");
}
