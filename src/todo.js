export { todoList, newTodo, Todo };

let todoList = [];

class Todo {
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
const item1 = new Todo("testname", "test description", "2/2/22", 3);
todoList.push(item1);

function newTodo(name, description, dueDate, priority) {
  let newItem = new Todo(name, description, dueDate, priority);
  todoList.push(newItem);
  console.log(todoList);
}

newTodo("test2", "test 2 descript", "test 2 date?", 2);
