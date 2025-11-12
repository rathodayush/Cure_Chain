// toggele ke liye//



document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const icon = toggler.querySelector(".toggle-icon");

  toggler.addEventListener("click", function () {
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark"); // Cross icon
  });
});

