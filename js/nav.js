const nav = document.body.querySelector("nav")
const nav_pageOne =nav.querySelector(".nav__to-do");
const nav_pageTwo = nav.querySelector(".nav__options");
const NAV_PRESSED="nav-pressed";

const pageOne = document.body.querySelector(".page-one")
const pageTwo = document.body.querySelector(".page-two")
const HIDDEN = "hidden"

function showPageOne(){
    pageOne.classList.remove(HIDDEN)
    pageTwo.classList.add(HIDDEN)
    nav_pageOne.classList.add(NAV_PRESSED)
    nav_pageTwo.classList.remove(NAV_PRESSED)
}
function showPageTwo(){
    pageOne.classList.add(HIDDEN)
    pageTwo.classList.remove(HIDDEN)
    nav_pageOne.classList.remove(NAV_PRESSED)
    nav_pageTwo.classList.add(NAV_PRESSED)
}
nav_pageOne.addEventListener("click",showPageOne)
nav_pageTwo.addEventListener("click",showPageTwo)