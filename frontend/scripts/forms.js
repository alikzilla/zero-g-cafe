const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;

  emailjs.send("service_804ntxc", "template_wgyywwo", {
    email: email,
  });
});
