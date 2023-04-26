import { contentRefresh } from "./dom";
import { format, formatDistance } from "date-fns";
import { editTodo } from "./addTodo.js";
import Done from "./done.svg";
import Edit from "./edit.svg";
import Delete from "./close.svg";
import { populateStorage } from "./storage";
export { todoList, todoListKey, newTodo, displayTodoList };

let todoList = [];
let todoListKey = ["name", "description", "dueDate", "priority", "project"];

function newTodo(name, description, dueDate, priority, project) {
  let dueDateFormat = format(new Date(dueDate), "M/d/yy");
  let newItem = [name, description, dueDateFormat, priority, project];
  todoList.push(newItem);
  // console.log(todoList);
  populateStorage();
}

function displayTodoList() {
  const element = document.createElement("div");
  element.classList.add("todoList");
  for (let i = 0; i < todoList.length; i++) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("todoContent");
    todoDiv.appendChild(contentDiv);
    for (let j = 0; j < todoList[i].length; j++) {
      const div1 = document.createElement("div");
      div1.classList.add(todoListKey[j]);
      div1.textContent = todoList[i][j];
      contentDiv.appendChild(div1);
    }
    if (todoList[i][3] === "high") {
      todoDiv.classList.add("high");
    } else if (todoList[i][3] === "normal") {
      todoDiv.classList.add("normal");
    } else if (todoList[i][3] === "low") {
      todoDiv.classList.add("low");
    }
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("todoButtons");
    todoDiv.appendChild(buttonDiv);

    const complete = new Image();
    complete.src = Done;
    // const complete = document.createElement("div");
    // complete.appendChild(doneImage);
    complete.classList.add("completeTodo");
    complete.classList.add([i]);
    // complete.textContent = "Complete";
    complete.addEventListener("click", explode, false);
    buttonDiv.appendChild(complete);

    // const edit = document.createElement("button");
    const edit = new Image();
    edit.src = Edit;
    edit.classList.add("editTodo");
    edit.classList.add([i]);
    // edit.textContent = "Edit";
    edit.addEventListener(
      "click",
      function () {
        editTodo(todoList[i], i);
      },
      false
    );
    buttonDiv.appendChild(edit);
    // const button = document.createElement("button");
    const deleteButton = new Image();
    deleteButton.src = Delete;
    deleteButton.classList.add("deleteTodo");
    deleteButton.classList.add([i]);
    // button.textContent = "Delete";
    deleteButton.addEventListener("click", removeTodo, false);
    buttonDiv.appendChild(deleteButton);
    element.appendChild(todoDiv);
  }
  return element;
}

function removeTodo() {
  let todoId = this.classList[1];
  let removed = todoList.splice(todoId, 1);
  // console.log(todoList);
  contentRefresh();
  populateStorage();
}

function explode() {
  // alert("Boom!");
  const thisTodo = this.parentElement.parentElement;
  thisTodo.classList.add("boom");
  const myTimeout = setTimeout(removeThisTodo, 2000);
  function removeThisTodo() {
    thisTodo.remove();
  }
  // thisTodo.remove();
  let todoId = this.classList[1];
  let removed = todoList.splice(todoId, 1);
  // console.log(todoList);
  populateStorage();
}
