export { todoList, todoListKey, newTodo, displayTodoList };

let todoList = [];
let todoListKey = ["name", "description", "dueDate", "priority", "project"];

function newTodo(name, description, dueDate, priority, project) {
  let newItem = [name, description, dueDate, priority, project];
  todoList.push(newItem);
  console.log(todoList);
}

function displayTodoList() {
  const element = document.createElement("div");
  element.classList.add("todoList");
  for (let i = 0; i < todoList.length; i++) {
    const div = document.createElement("div");
    div.classList.add("todo");
    for (let j = 0; j < todoList[i].length; j++) {
      const div1 = document.createElement("div");
      div1.classList.add(todoListKey[j]);
      div1.textContent = todoList[i][j];
      div.appendChild(div1);
    }
    if (todoList[i][3] === "high") {
      div.classList.add("high");
    } else if (todoList[i][3] === "normal") {
      div.classList.add("normal");
    } else if (todoList[i][3] === "low") {
      div.classList.add("low");
    }
    const button = document.createElement("button");
    button.classList.add("deleteTodo");
    button.classList.add([i]);
    button.textContent = "Delete";
    button.addEventListener("click", removeTodo, false);
    div.appendChild(button);
    const complete = document.createElement("button");
    complete.classList.add("completeTodo");
    complete.classList.add([i]);
    complete.textContent = "Complete";
    complete.addEventListener("click", explode, false);
    div.appendChild(complete);
    element.appendChild(div);
  }
  return element;
}

function removeTodo() {
  let todoId = this.classList[1];
  let removed = todoList.splice(todoId, 1);
  console.log(todoList);
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  content.appendChild(displayTodoList());
}

function explode() {
  // alert("Boom!");
  const thisTodo = this.parentElement;
  thisTodo.classList.add("boom");
  const myTimeout = setTimeout(removeThisTodo, 2000);
  function removeThisTodo() {
    thisTodo.remove();
  }
  // thisTodo.remove();
  let todoId = this.classList[1];
  let removed = todoList.splice(todoId, 1);
  console.log(todoList);
}
