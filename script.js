// Animate skill progress bars when they come into view
document.addEventListener("DOMContentLoaded", function () {
    // Filter buttons active state
    const filterButtons = document.querySelectorAll(".skills-filter a");
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) =>
          btn.querySelector("button").classList.remove("active")
        );
        button.querySelector("button").classList.add("active");
      });
    });
  
    // Mobile menu toggle
    const menuButton = document.querySelector(".menu-button");
    const navLinks = document.querySelector(".nav-links");
  
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".navbar-container")) {
        navLinks.classList.remove("active");
      }
    });
  
    // Handle navbar background on scroll
    window.addEventListener("scroll", function () {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
      } else {
        navbar.style.boxShadow = "none";
      }
    });
  });