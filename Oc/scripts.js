document.addEventListener("DOMContentLoaded", () => {
    // Mobile Nav Toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Dropdown Toggle for Navigation
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        dropdown.addEventListener("mouseenter", () => {
            dropdown.querySelector(".dropdown-menu").style.display = "block";
        });

        dropdown.addEventListener("mouseleave", () => {
            dropdown.querySelector(".dropdown-menu").style.display = "none";
        });
    });
});
