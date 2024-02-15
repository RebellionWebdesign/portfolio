document.addEventListener("DOMContentLoaded", (event) => {

    lucide.createIcons();

    let navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function (link) {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });

    document.addEventListener("mousemove", (e) => {
        const cursor = document.querySelector(".cursor")
        const button = document.querySelector(".button")
        const link = document.getElementsByTagName("a")
        let x = e.pageX
        let y = e.pageY

        const buttonRect = button.getBoundingClientRect()
        const targetX = buttonRect.left + buttonRect.width / 2;
        const targetY = buttonRect.top + buttonRect.height / 2;
        const deltaX = x - targetX
        const deltaY = y - targetY
        const distance = Math.sqrt(deltaX*deltaX+deltaY*deltaY)
        const threshold = 100

        cursor.style.top = y + "px"
        cursor.style.left = x + "px"
        cursor.style.display = "block";

        if (distance < threshold) {
            cursor.style.transform = 'scale(2)'
            cursor.style.backgroundColor = 'orange';
        } else {
            cursor.style.transform = 'scale(1)'
            cursor.style.backgroundColor = '#f8d500';
        }
    })
});