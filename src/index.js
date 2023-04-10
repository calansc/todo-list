// import { format, formatDistance } from "date-fns";
import { todoList, Todo, newTodo } from "./todo.js";

// console.log(Item);
// console.log(newTodo);
newTodo("test3", "3 de", "2/2/22", 1);

const content = document.getElementById("content");

for (let i = 0; i < todoList.length; i++) {
  const div = document.createElement("div");
  div.textContent = todoList[i];
  content.appendChild(div);
}
