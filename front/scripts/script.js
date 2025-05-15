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
