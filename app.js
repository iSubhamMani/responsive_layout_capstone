const hamMenu = document.querySelector(".ham-menu");
const navMenu = document.querySelector(".nav__list");

hamMenu.addEventListener("click", () => {
  navMenu.classList.toggle("visible");
});
