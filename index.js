document.addEventListener("DOMContentLoaded", function () {
  // Create stars background
  createStars();

  // Header scroll effect
  const header = document.getElementById("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    hamburger.innerHTML = navMenu.classList.contains("active")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (navMenu.classList.contains("active")) {
          navMenu.classList.remove("active");
          hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
      }
    });
  });

  // Show fixed contact block after delay
  setTimeout(function () {
    document.getElementById("fixed-contact").classList.add("visible");
  }, 3000);

  // Fixed contact button click
  document
    .getElementById("fixed-contact")
    .addEventListener("click", function () {
      window.scrollTo({
        top: document.getElementById("contact").offsetTop - 80,
        behavior: "smooth",
      });
    });

  // Header contact button click
  document
    .getElementById("header-contact-btn")
    .addEventListener("click", function () {
      window.scrollTo({
        top: document.getElementById("contact").offsetTop - 80,
        behavior: "smooth",
      });
    });

  // Explore menu button click
  document
    .getElementById("explore-menu-btn")
    .addEventListener("click", function () {
      window.scrollTo({
        top: document.getElementById("menu").offsetTop - 80,
        behavior: "smooth",
      });
    });

  // Book table button click
  document
    .getElementById("book-table-btn")
    .addEventListener("click", function () {
      window.scrollTo({
        top: document.getElementById("contact").offsetTop - 80,
        behavior: "smooth",
      });
    });

  // Menu functionality
  const menuItems = [
    {
      id: 1,
      title: "Cosmic Caviar",
      price: 24,
      description:
        "Sustainable sturgeon caviar served with blinis and crème fraîche, presented on a chilled meteorite plate.",
      image:
        "https://images.unsplash.com/photo-1604977046806-87b0d1b9b743?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    {
      id: 9,
      title: "Moon Cheese Platter",
      price: 20,
      description:
        "Selection of artisanal cheeses with honeycomb, nuts, and fruits arranged to resemble the lunar surface.",
      image:
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "desserts",
      tags: ["Shareable", "Gourmet"],
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
                      .map((tag) => `<span class="menu-item-tag">${tag}</span>`)
                      .join("")}
                </div>
            </div>
        `;

      menuContainer.appendChild(menuItem);
    });
  }

  // Customer reviews
  const reviews = [
    {
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "Absolutely out of this world! The VR experience while dining was something I'll never forget. The Black Hole Burger was delicious and the Milky Way Martini was as beautiful as it was tasty.",
      date: "2 days ago",
    },
    {
      name: "Michael Chen",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
      text: "Incredible atmosphere and innovative menu. The Cosmic Crunch dessert was a showstopper - watching it crack open to reveal the galaxy inside was magical. Service was a bit slow but understandable given the unique concept.",
      date: "1 week ago",
    },
    {
      name: "Emily Rodriguez",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      text: "Best birthday dinner ever! The staff surprised me with a special 'Happy Birthday' message that appeared to float above our table. The Nebula Noodles were delicious and so fun to eat with the color-changing glitter.",
      date: "3 weeks ago",
    },
    {
      name: "David Kim",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 5,
      text: "As a space enthusiast, this was my dream dining experience. The VR Mars exploration paired perfectly with the Martian Mushroom Risotto. Can't wait to come back and try their new experiences!",
      date: "1 month ago",
    },
    {
      name: "Jessica Williams",
      avatar: "https://randomuser.me/api/portraits/women/25.jpg",
      rating: 4,
      text: "Such a unique concept executed beautifully. The Asteroid Arancini were delicious and the Zero Gravity Float drink was so fun to watch. The only downside was the price, but it's worth it for a special occasion.",
      date: "2 months ago",
    },
  ];

  const reviewsContainer = document.querySelector(".reviews-container");

  reviews.forEach((review) => {
    const reviewCard = document.createElement("div");
    reviewCard.className = "review-card";

    let stars = "";
    for (let i = 0; i < 5; i++) {
      stars +=
        i < review.rating
          ? '<i class="fas fa-star"></i>'
          : '<i class="far fa-star"></i>';
    }

    reviewCard.innerHTML = `
        <div class="review-header">
            <div class="review-avatar">
                <img src="${review.avatar}" alt="${review.name}">
            </div>
            <div class="review-info">
                <h4>${review.name}</h4>
                <div class="stars">${stars}</div>
            </div>
        </div>
        <div class="review-text">${review.text}</div>
        <div class="review-date">${review.date}</div>
    `;

    reviewsContainer.appendChild(reviewCard);
  });

  // Form submission
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;

    // Show success message
    alert(
      `Thanks for your reservation, ${name}! We've sent a confirmation to ${email}. See you on ${date}!`
    );

    // Reset form
    contactForm.reset();
  });

  // Newsletter form
  const newsletterForm = document.getElementById("newsletter-form");
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    alert(
      `Thank you for subscribing with ${emailInput.value}! You'll receive our cosmic updates soon.`
    );
    newsletterForm.reset();
  });
});

function createStars() {
  const starsContainer = document.getElementById("stars");
  const starsCount = 200;

  for (let i = 0; i < starsCount; i++) {
    const star = document.createElement("div");
    star.className = "star";

    // Random size between 1 and 3 pixels
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Random position
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    // Random opacity and animation delay
    star.style.opacity = Math.random();
    star.style.animationDelay = `${Math.random() * 5}s`;

    starsContainer.appendChild(star);
  }
}
