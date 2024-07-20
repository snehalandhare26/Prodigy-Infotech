// script.js
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            link.style.color = "#cf603b1";
        });

        link.addEventListener("mouseout", function() {
            link.style.color = "white";
        });
    });
});
