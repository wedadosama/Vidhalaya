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
const form = document.querySelector(".subscribe-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.querySelector("input").value.trim();
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  alert(isValid ? "Thanks for subscribing!" : "Invalid email.");
  if (isValid) form.reset();
});



