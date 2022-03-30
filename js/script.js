const toggle = document.getElementById("toggle");
const list = document.querySelector(".header__list");

toggle.addEventListener("click", () => {
  list.classList.toggle("active");
});
