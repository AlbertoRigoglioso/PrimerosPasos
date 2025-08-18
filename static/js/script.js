document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu-content");

    btn.addEventListener("click", function() {
        menu.classList.toggle("show");
    });
});