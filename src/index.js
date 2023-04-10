// import { format, formatDistance } from "date-fns";
import { todoList, Todo, newTodo, displayTodoList } from "./todo.js";
import "./style.css";

// console.log(Item);
// console.log(newTodo);
// newTodo("test3", "3 de", "2/2/22", 1);

const content = document.getElementById("content");
content.appendChild(displayTodoList());

// for (let i = 0; i < todoList.length; i++) {
//   const div = document.createElement("div");
//   const div2 = document.createElement("div");
//   div.textContent = todoList[i].name;
//   content.appendChild(div);
//   div2.textContent = todoList[i].description;
//   content.appendChild(div2);
// }
