let header = document.getElementById("header");
let ocultar = document.getElementById("ocultar")
let nav = document.getElementById("nav");
let options = document.getElementsByClassName("options")
let burger = document.getElementById("burger");
let burgertwo = document.getElementById("burgertwo");
let screenInfo = window.screen;
burger.addEventListener("click", () => {
    header.style.height = "400px"
    ocultar.style.display = "flex"
    burger.style.display = "none"
    burgertwo.style.display = "flex"
})

burgertwo.addEventListener("click", () => {
    header.style.height = "auto"
    ocultar.style.display = "none"
    burgertwo.style.display = "none"
    burger.style.display = "flex"
})
