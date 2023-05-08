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
  const dropDownBox = document.createElement("div");
  dropDownBox.classList.add("dropDownBox");
  dropDownBox.style.display = "none";
  dropDownBox.style.position = "absolute";
  dropDownBox.style.right = "0px";
  dropDownBox.style.top = "46px";
  dropDownBox.style.backgroundColor = "var(--darkblue)";
  dropDownBox.style.borderRadius = "4px";
  dropDownDiv.appendChild(dropDownBox);
  dropDownDiv.addEventListener(
    "mouseenter",
    function () {
      dropDownBox.style.display = "block";
    },
    false
  );
  dropDownDiv.addEventListener(
    "mouseleave",
    function () {
      dropDownBox.style.display = "none";
    },
    false
  );
  dropDownDiv.addEventListener(
    "touchstart",
    function (e) {
      let ddb = document.querySelector(".dropDownBox");
      let ddbs = ddb.computedStyleMap().get("display");
      if (ddbs.value === "none") {
        dropDownBox.style.display = "block";
      } else if (ddbs.value === "block") {
        if (e.target !== e.currentTarget) return;
        dropDownBox.style.display = "none";
      }
    },
    false
  );
  return dropDownDiv;
}
