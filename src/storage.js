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
  let todoStringify = JSON.stringify(todoList);
  let projectStringify = JSON.stringify(projectList);
  localStorage.setItem("todoList", todoStringify);
  localStorage.setItem("projectList", projectStringify);
}
function retrieveStorage() {
  let storageTodo = localStorage.getItem("todoList");
  let parseTodo = JSON.parse(storageTodo);
  // console.log(parseTodo);
  if (parseTodo.length > 0) {
    for (let i = 0; i < parseTodo.length; i++) {
      todoList.push(parseTodo[i]);
    }
  }
  let storageProject = localStorage.getItem("projectList");
  let parseProject = JSON.parse(storageProject);
  if (parseProject.length > 0) {
    for (let i = 0; i < parseProject.length; i++) {
      projectList.push(parseProject[i]);
    }
  }
}
