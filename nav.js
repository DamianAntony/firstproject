document.addEventListener("DOMContentLoaded", function() {
  var navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 50) { // Adjust this value to change the scroll point
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
