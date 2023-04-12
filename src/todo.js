export { todoList, todoListKey, newTodo, displayTodoList };

let todoList = [];
let todoListKey = ["name", "description", "dueDate", "priority", "project"];

function newTodo(name, description, dueDate, priority, project) {
  let newItem = [name, description, dueDate, priority, project];
  todoList.push(newItem);
  console.log(todoList);
}

newTodo("testname", "test description", "2/2/22", 3, "project 1");
newTodo("test2", "test 2 descript", "test 2 date?", 2, "project 1");
newTodo("test3", "description 3", "3/3/2023", 1, "project 2");

function displayTodoList() {
  const element = document.createElement("div");
  element.classList.add("todoList");
  for (let i = 0; i < todoList.length; i++) {
    const div = document.createElement("div");
    div.classList.add("todo");
    element.appendChild(div);
    for (let j = 0; j < todoList[i].length; j++) {
      const div1 = document.createElement("div");
      div1.classList.add(todoListKey[j]);
      div1.textContent = todoList[i][j];
      div.appendChild(div1);
    }
  }
  return element;
}
