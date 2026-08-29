
import bgImg from "../assets/images/bg.jpg";
import foodImg from "../assets/images/food.jpg";
import foodieImg from "../assets/images/foodie.jpg";

export function loadMenu() {
  const container = document.createElement("div");

  container.classList.add("tab-container", "menu-page");

  container.innerHTML = `
    <h1>Explore our flavourful dishes</h1>
    <div class="menu-grid"></div>
  `;

  const grid = container.querySelector(".menu-grid");

  const menuItems = [
    {
      name: "Truffle Pasta",
      price: "$300",
      img: bgImg,
      desc: "Yummy and tasty."
    },
    {
      name: "WoodFired Pasta",
      price: "$350",
      img: foodImg,
      desc: "Woody flavours infused."
    },
    {
      name: "Fruit Pasta",
      price: "$500",
      img: foodieImg,
      desc: "Fruit overdose."
    }
  ];

  menuItems.forEach((item) => {
    const card = document.createElement("div");

    card.classList.add("menu-card");

    card.innerHTML = `
      <img
        class="menu-img"
        src="${item.img}"
        alt="${item.name}"
      />

      <div class="menu-info">
        <h3>
          ${item.name}
          <span class="menu-price">${item.price}</span>
        </h3>

        <p>${item.desc}</p>
      </div>
    `;

    grid.appendChild(card);
  });

  return container;
}

