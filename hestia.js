// DOM Elements
const header = document.querySelector(".header");
const headerA = document.querySelectorAll(".header__nav-a");
const headerP = document.querySelector(".header__p");

// Listen Events
addEventListener("scroll", headerChange);

// Associated Functions
function headerChange(){
    let newLink = document.querySelectorAll(".headerScroll__a");
    if (scrollY >= 456) {
        header.style.backgroundColor = "#fff";
        header.style.padding = "1.6em 8em";
        header.style.boxShadow = "0 1px 10px rgba(0, 0, 0, 0.295)";
        headerP.style.color = "#323437";
        headerA.forEach(e => e.classList.replace("header__nav-a", "headerScroll__a"));
    } else {
        header.style.backgroundColor = "transparent";
        headerP.style.color = "#fff";
        header.style.padding = "2rem 8em";
        header.style.boxShadow = "none";
        headerA.forEach(e => e.classList.replace("headerScroll__a", "header__nav-a"));
    }
}