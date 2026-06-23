import backgroundImage from "../assets/images/bg.jpg";

export function loadHome(){
  const container = document.createElement("div");
  container.classList.add("tab-container", "home-page");

  
  container.style.backgroundImage = `url(${backgroundImage})`;

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("home-content"); 

  const headline = document.createElement("h1");
  headline.textContent = "Eka's Delight";

  const description = document.createElement("p");
  description.textContent = "Just like mama's.";

  contentDiv.appendChild(headline);
  contentDiv.appendChild(description);
  container.appendChild(contentDiv);

  return container;
} 