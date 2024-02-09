document.addEventListener("DOMContentLoaded", (event) => {

    lucide.createIcons();

    let navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function (link) {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});