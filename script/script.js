let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

navBarToggle.addEventListener("keydown", (event) => {
  if (event.code === "Space" || event.code === "Enter") {
    mainNav.classList.toggle("active");
  }
});
