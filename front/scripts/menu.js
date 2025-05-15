// Menu functionality
const menuItems = [
  {
    id: 1,
    title: "Cosmic Caviar",
    price: 24,
    description:
      "Sustainable sturgeon caviar served with blinis and crème fraîche, presented on a chilled meteorite plate.",
    image: "https://s3.envato.com/files/503008697/IMG_5557-2.jpg",
    category: "starters",
    tags: ["Signature", "Gourmet"],
  },
  {
    id: 2,
    title: "Asteroid Arancini",
    price: 16,
    description:
      "Crispy saffron risotto balls filled with mozzarella and black truffle, resembling small asteroids.",
    image:
      "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "starters",
    tags: ["Vegetarian", "Crunchy"],
  },
  {
    id: 3,
    title: "Nebula Noodles",
    price: 28,
    description:
      "Squid ink pasta with scallops, shrimp, and a galaxy of edible glitter that changes color as you eat.",
    image:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "mains",
    tags: ["Seafood", "Interactive"],
  },
  {
    id: 4,
    title: "Black Hole Burger",
    price: 22,
    description:
      "Wagyu beef patty with black sesame bun, cosmic sauce, and a side of asteroid fries that 'orbit' your plate.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "mains",
    tags: ["Signature", "Hearty"],
  },
  {
    id: 5,
    title: "Martian Mushroom Risotto",
    price: 24,
    description:
      "Creamy arborio rice with wild mushrooms, white wine, and edible 'red planet' dust for that authentic Martian feel.",
    image:
      "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "mains",
    tags: ["Vegetarian", "Creamy"],
  },
  {
    id: 6,
    title: "Milky Way Martini",
    price: 18,
    description:
      "Vodka, white chocolate liqueur, and edible glitter that swirls like a galaxy when stirred.",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    tags: ["Signature", "Instagrammable"],
  },
  {
    id: 7,
    title: "Zero Gravity Float",
    price: 14,
    description:
      "Dry ice-infused root beer with vanilla ice cream that appears to float above the glass.",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    tags: ["Non-alcoholic", "Interactive"],
  },
  {
    id: 8,
    title: "Cosmic Crunch",
    price: 16,
    description:
      "Chocolate mousse with popping candy, served in an edible chocolate 'meteor' that cracks open to reveal a galaxy inside.",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "desserts",
    tags: ["Signature", "Interactive"],
  },
];

const menuContainer = document.querySelector(".menu-items");
const categoryButtons = document.querySelectorAll(".category-btn");

// Display all menu items initially
displayMenuItems(menuItems);

// Category filter functionality
categoryButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    this.classList.add("active");

    const category = this.getAttribute("data-category");
    if (category === "all") {
      displayMenuItems(menuItems);
    } else {
      const filteredItems = menuItems.filter(
        (item) => item.category === category
      );
      displayMenuItems(filteredItems);
    }
  });
});

function displayMenuItems(items) {
  menuContainer.innerHTML = "";

  items.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";
    menuItem.setAttribute("data-category", item.category);

    menuItem.innerHTML = `
                  <div class="menu-item-img">
                      <img src="${item.image}" alt="${item.title}">
                  </div>
                  <div class="menu-item-content">
                      <div class="menu-item-title">
                          <h3>${item.title}</h3>
                          <span>$${item.price}</span>
                      </div>
                      <div class="menu-item-desc">${item.description}</div>
                      <div class="menu-item-tags">
                          ${item.tags
                            .map(
                              (tag) =>
                                `<span class="menu-item-tag">${tag}</span>`
                            )
                            .join("")}
                      </div>
                  </div>
              `;

    menuContainer.appendChild(menuItem);
  });
}
