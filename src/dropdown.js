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
    function (e) {
      dropDownBox.style.display = "block";
      console.log(e.target.classList[0]);
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
      }
    },
    false
  );
  return dropDownDiv;
}
