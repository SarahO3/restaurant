import bgImg from "../assets/images/bg.jpg";
import foodImg from "../assets/images/food.jpg";
import foodieImg from "../assets/images/foodie.jpg"; 

export function loadMenu(){ 
    const container = document.createElement("div");
    container.classList.add("tab-container", "menu-page");

    const headline = document.createElement("h1");
    headline.textContent = "Explore our flavourful dishes";
    container.appendChild(headline);

    const grid = document.createElement("div");
    grid.classList.add("menu-grid");

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
      },
    ];

    menuItems.forEach(item => {
         const card = document.createElement("div");
         card.classList.add("menu-card");

         const img = document.createElement("img");
         img.src = item.img;
         img.alt = item.name;
         img.classList.add("menu-img");

         const info = document.createElement("div");
         info.classList.add("menu-info");

         const titleWrapper = document.createElement("h3");
         titleWrapper.innerHTML = `${item.name} <span class="menu-price">${item.price}</span>`;
        
         const descText = document.createElement("p");
         descText.textContent = item.desc;

         info.appendChild(titleWrapper);
         info.appendChild(descText);
         card.appendChild(img);
         card.appendChild(info);
         grid.appendChild(card);
    });

    container.appendChild(grid);
    return container;
}