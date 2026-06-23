import "./css/global.css";
import { loadHome } from "./modules/home.js";
import { loadMenu } from "./modules/menu.js";
import { loadContact } from "./modules/contact.js";

const contentDiv = document.getElementById("content");

const buttons = {
  home: document.getElementById("home-btn"),
  menu: document.getElementById("menu-btn"), // Fixed typo 'meu-btn'
  contact: document.getElementById("contact-btn"),
};

function switchTab(tabElement, activeButton){
  // Clear page content
  contentDiv.innerHTML = "";
  contentDiv.appendChild(tabElement);

  // Update active navbar button styles
  Object.values(buttons).forEach(btn => btn.classList.remove("active"));
  activeButton.classList.add("active");
}

// Event listeners
buttons.home.addEventListener("click", () => switchTab(loadHome(), buttons.home));
buttons.menu.addEventListener("click", () => switchTab(loadMenu(), buttons.menu)); // Fixed typo 'mene' -> 'menu'
buttons.contact.addEventListener("click", () => switchTab(loadContact(), buttons.contact));

// Initial page mount
switchTab(loadHome(), buttons.home);