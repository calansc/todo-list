// import { format, formatDistance } from "date-fns";
import { todoList, newTodo, displayTodoList } from "./todo.js";
import { addTodo } from "./addTodo.js";
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
import {
  storageAvailable,
  populateStorage,
  retrieveStorage,
} from "./storage.js";

if (window.localStorage.length === 0) {
  console.log("no local storage");
} else {
  retrieveStorage();
}

// newTodo("testname", "test description", "2/03/22", "high", "project 1");
// newTodo("test2", "test 2 descript", "5/15/24", "normal", "project 1");
// newTodo("test3", "description 3", "3/03/2023", "low", "project 2");
// newTodo("test4", "4 de", "2/02/22", "high", "project 2");

const header = document.getElementById("header");
header.appendChild(addTodo());
const content = document.getElementById("content");
contentRefresh();
headerRefresh();

if (storageAvailable("localStorage")) {
  console.log("Yippee! We can use localStorage awesomeness");
} else {
  console.log("Too bad, no localStorage for us");
}
