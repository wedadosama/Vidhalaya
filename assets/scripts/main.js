document.getElementById("toggle-theme").onclick = () => {
  document.body.classList.toggle("dark-theme");
  const img = document.getElementById("toggle-theme");
  img.src = document.body.classList.contains("dark-theme")
    ? "assets/icons/dark.webp"
    : "assets/icons/light.webp";
};

// Menu toggle on small screens
document.getElementById("menu-toggle").addEventListener("change", function () {
  const navMenu = document.getElementById("nav-menu");
  if (this.checked) {
    navMenu.classList.add("open");
  } else {
    navMenu.classList.remove("open");
  }
});
