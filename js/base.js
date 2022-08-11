let menu = document.getElementsByClassName("menu");
let x = window.location.pathname.split("/");
let nav = document.getElementsByClassName("nav_bar");
let news = document.getElementsByClassName("news");
console.log(x);

function toX(x) {
    x.classList.toggle("change");
}

function openNav() {
    nav[0].classList.toggle("show");
}