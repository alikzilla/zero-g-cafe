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
