import { projectTabs } from "./project";
import Menu from "./menu.svg";
export { dropDown };

function dropDown() {
  const dropDownDiv = document.createElement("div");
  dropDownDiv.classList.add("dropDownDiv");
  dropDownDiv.style.position = "relative";
  dropDownDiv.textContent = "Project List";
  const menu = new Image();
  menu.src = Menu;
  dropDownDiv.appendChild(menu);
  dropDownDiv.addEventListener(
    "mouseenter",
    function () {
      //   console.log("enter");
      dropDownBox.style.display = "block";
    },
    false
  );
  dropDownDiv.addEventListener(
    "mouseleave",
    function () {
      //   console.log("leave");
      dropDownBox.style.display = "none";
    },
    false
  );
  const dropDownBox = document.createElement("div");
  dropDownBox.classList.add("dropDownBox");
  dropDownBox.style.display = "none";
  dropDownBox.style.position = "absolute";
  dropDownBox.style.right = "0px";
  dropDownBox.style.top = "46px";
  //   dropDownBox.style.width = "100px";
  //   dropDownBox.style.height = "100px";
  dropDownBox.style.backgroundColor = "var(--darkblue)";
  dropDownBox.style.borderRadius = "4px";
  //   dropDownBox.appendChild(projectTabs());
  dropDownDiv.appendChild(dropDownBox);

  return dropDownDiv;
}
