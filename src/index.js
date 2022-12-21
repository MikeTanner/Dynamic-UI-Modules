import "./styles/main.css";
import "./template.html";
import toggleMenu from "./toggleMenu";

const greg = toggleMenu();
const profilePic = document.querySelector("#bigUserPic");
const subMenu = document.getElementById("subMenu");
const arg2 = "open-menu";
profilePic.addEventListener("click", () => {
  greg.toggle(subMenu, arg2);
});
