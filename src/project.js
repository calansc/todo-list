export { projectList, createProject, projectTabs };

let projectList = ["project 1", "project 2"];

function createProject() {
  console.log("create project");
}

function projectTabs() {
  const tabs = document.createElement("div");
  tabs.classList.add("tabs");
  const tab = document.createElement("div");
  tab.classList.add("projectTab");
  tab.textContent = "All Todo's";
  tabs.appendChild(tab);
  for (let i = 0; i < projectList.length; i++) {
    const tab = document.createElement("div");
    tab.classList.add("projectTab");
    tab.textContent = projectList[i];
    // tab.addEventListener("click");
    tabs.appendChild(tab);
    // working on tab event listener to sort todos
  }
  return tabs;
}
