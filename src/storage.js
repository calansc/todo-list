export { storageAvailable, populateStorage, retrieveStorage };
import { todoList } from "./todo";
import { projectList } from "./project";

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function populateStorage() {
  localStorage.setItem("todoList", todoList);
  localStorage.setItem("projectList", projectList);
}
function retrieveStorage() {
  const storageTodo = localStorage.getItem("todoList");
  if (storageTodo.length > 0) {
    const todoArray = storageTodo.split(",");
    for (let i = 0; i < todoArray.length; i += 5) {
      let newArray = [];
      newArray.push(todoArray[i]);
      newArray.push(todoArray[i + 1]);
      newArray.push(todoArray[i + 2]);
      newArray.push(todoArray[i + 3]);
      newArray.push(todoArray[i + 4]);
      // console.log(newArray);
      todoList.push(newArray);
    }
  }
  //   console.log(todoList);

  const storageProject = localStorage.getItem("projectList");
  if (storageProject.length > 0) {
    const projectArray = storageProject.split(",");
    //   console.log(projectArray);
    for (let i = 0; i < projectArray.length; i++) {
      projectList.push(projectArray[i]);
    }
  }
}
