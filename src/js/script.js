"use strict";

const bgMenu = document.querySelector(".burger__menu");
const dropDown = document.querySelector(".dropDown");
const navMenu = document.querySelector(".nav__menu");

bgMenu.addEventListener("click", () => {
    dropDown.classList.toggle("active");

    if (dropDown.classList.contains("active")) {
        bgMenu.classList.add("active");
        navMenu.classList.add("active");
    
    } else {
        bgMenu.classList.remove("active");
        navMenu.classList.remove("active");
    }
});