export { todoList, newTodo, displayTodoList };

let todoList = [];

// class Todo {
//   constructor(name, description, dueDate, priority) {
//     this.name = name;
//     this.description = description;
//     this.dueDate = dueDate;
//     this.priority = priority;
//   }
// }

function newTodo(name, description, dueDate, priority) {
  // let newItem = new Todo(name, description, dueDate, priority);
  // todoList.push(newItem);
  let newItem = [name, description, dueDate, priority];
  todoList.push(newItem);
  console.log(todoList);
}

newTodo("testname", "test description", "2/2/22", 3);
newTodo("test2", "test 2 descript", "test 2 date?", 2);
newTodo("test3", "description 3", "3/3/2023", 1);
console.log(todoList.length);
console.log(todoList[0].length);

function displayTodoList() {
  const element = document.createElement("div");
  element.classList.add("todoList");
  for (let i = 0; i < todoList.length; i++) {
    const div0 = document.createElement("div");
    const div = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");
    div0.classList.add("todo");
    div.textContent = todoList[i][0];
    div.classList.add("name");
    div2.textContent = todoList[i][1];
    div2.classList.add("description");
    div3.textContent = todoList[i][2];
    div3.classList.add("dueDate");
    div4.textContent = todoList[i][3];
    div4.classList.add("priority");
    element.appendChild(div0);
    div0.appendChild(div);
    div0.appendChild(div2);
    div0.appendChild(div3);
    div0.appendChild(div4);
  }
  return element;
}
