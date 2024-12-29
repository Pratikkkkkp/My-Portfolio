document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".navbar .nav-link");
  const navbarToggler = document.getElementById("navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse"); // Corrected to target the collapsible menu

  // Function to update active link
  const updateActiveLink = () => {
    links.forEach((link) => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };

  // Initial check to set active link
  updateActiveLink();

  // Update active link on click
  links.forEach((link) => {
    link.addEventListener("click", function () {
      setTimeout(updateActiveLink, 10); // Timeout to handle hash navigation
    });
  });

  // Update active link on hash change (for in-page navigation)
  window.addEventListener("hashchange", updateActiveLink);

  // Hamburger toggle functionality
  if (navbarToggler) {
    navbarToggler.addEventListener("click", function () {
      // Toggle the 'open' class to show/hide the navbar menu
      navbarCollapse.classList.toggle("open");
    });
  }

  // Close the navbar when a nav link is clicked (for mobile view)
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("open")) {
        navbarCollapse.classList.remove("open");
      }
    });
  });
});
