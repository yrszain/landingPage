// Selecting menu button and mobile menu
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

// Toggle mobile menu on click
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

const toggle = document.getElementById("toggle-switch");
const prices = document.querySelectorAll(".monthly-price");

toggle.addEventListener("change", () => {
  prices[0].textContent = toggle.checked ? "720" : "800";
  prices[1].textContent = toggle.checked ? "1080" : "1200";
  prices[2].textContent = toggle.checked ? "1620" : "1800";
});
