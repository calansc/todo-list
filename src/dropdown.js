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
  dropDownDiv.addEventListener("click", toggleDropDown, false);
  dropDownDiv.addEventListener(
    "mouseenter",
    function (e) {
      dropDownBox.style.display = "block";
      dropDownBox.classList.add("active");
      console.log(dropDownBox.classList[1]);
    },
    false
  );
  dropDownDiv.addEventListener(
    "mouseleave",
    function () {
      dropDownBox.style.display = "none";
      dropDownBox.classList.remove("active");
    },
    false
  );
  return dropDownDiv;
}
function toggleDropDown() {
  // document.querySelector(".dropDownBox").classList.toggle("active");
  let ddb = document.querySelector(".dropDownBox");
  if (ddb.style.display === "none") {
    ddb.style.display = "block";
  } else if (ddb.classList[1] != "active") {
    ddb.style.display = "none";
  }
}
