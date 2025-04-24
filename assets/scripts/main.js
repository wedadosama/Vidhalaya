document.getElementById("toggle-theme").onclick = () => {
  document.body.classList.toggle("dark-theme");
  const img = document.getElementById("toggle-theme");
  img.src = document.body.classList.contains("dark-theme") ? "assets/icons/dark.webp" : "assets/icons/light.webp";
};

document.getElementById("menu-toggle").addEventListener("change", function () {
  const navMenu = document.getElementById("nav-menu");
  if (this.checked) {
    navMenu.classList.add("open");
  } else {
    navMenu.classList.remove("open");
  }
});

const form = document.querySelector('.subscribe-form');
const input = form.querySelector('input');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = input.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    console.log("Subscribed with:", email);
    alert("Thanks for subscribing!");
    input.value = "";
  } else {
    alert("Please enter a valid email address.");
  }
});