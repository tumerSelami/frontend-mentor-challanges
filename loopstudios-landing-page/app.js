const menu = document.getElementById("menu-icon")
const close = document.getElementById("close-icon")
const navbar = document.getElementById("navbar")

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navbar.classList.remove("open");
    close.classList.toggle("active");
});

close.addEventListener("click", () => {
    close.classList.toggle("active");
    navbar.classList.add("open");
    menu.classList.toggle("active");
});