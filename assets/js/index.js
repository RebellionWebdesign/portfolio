document.addEventListener("DOMContentLoaded", (event) => {

    lucide.createIcons();

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

    const open = document.getElementById("open")
    const close = document.getElementById("close")
    const nav = document.getElementById("nav")

    open.addEventListener("click", () => {
        nav.style.right = "0"
        close.classList.add("rotate")
        close.classList.remove("backrotate")
        open.style.display = "none"
        open.style.transition = "0.5s ease-in-out"
    })

    close.addEventListener("click", () => {
        nav.style.right = "-55%"
        close.classList.remove("rotate")
        close.classList.add("backrotate")
        open.style.display = "block"
        open.style.transition = "0.5s ease-in-out"
    })

});