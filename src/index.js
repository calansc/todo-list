import { todoList, newTodo, displayTodoList } from "./todo.js";
import { addPopup } from "./addTodo.js";
import { addTodo } from "./addTodo.js";
import { headerRefresh, contentRefresh } from "./dom.js";
import "./style.css";
import {
  storageAvailable,
  populateStorage,
  retrieveStorage,
} from "./storage.js";
import { dropDown } from "./dropdown.js";
if (window.localStorage.length === 0) {
  console.log("no local storage");
} else {
  retrieveStorage();
}

const header = document.getElementById("header");
const title = document.createElement("div");
title.classList.add("title");
title.textContent = "Your Todo List";
header.appendChild(title);
header.appendChild(addTodo());
const addTodoButton = document.getElementsByClassName("addTodo");
addTodoButton[0].addEventListener(
  "click",
  function () {
    addPopup();
  },
  false
);
header.appendChild(dropDown());
const content = document.getElementById("content");
contentRefresh();
headerRefresh();

const main = document.getElementById("main");
main.addEventListener(
  "touchend",
  function () {
    let ddb = document.querySelector(".dropDownBox");
    let ddbs = ddb.computedStyleMap().get("display");
    if (ddbs.value === "block") {
      dropDownBox.style.display = "none";
    }
  },
  false
);

if (storageAvailable("localStorage")) {
  console.log("Yippee! We can use localStorage awesomeness");
} else {
  console.log("Too bad, no localStorage for us");
}
