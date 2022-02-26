let mainNav = document.getElementById("js-menu");
let navToggle = document.getElementById("js-nav-toggle");

navToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

navToggle.addEventListener("keydown", (event) => {
  if (event.code === "Space" || event.code === "Enter") {
    mainNav.classList.toggle("active");
  }
});
