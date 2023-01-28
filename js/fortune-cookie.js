const cookie=document.body.querySelector(".fortune-cookie");
const cookieBf = cookie.querySelector(".fortune-cookie__before");
const cookieAf = cookie.querySelector(".fortune-cookie__after")

const fortunes = [
    "Now is the time to try something new.",
    "You cannot love life until you live the life you love.",
    "Its amazing how much good you can do if you dont care who gets the credit.",
    "If you feel you are right, stand firmly by your convictions.",
    "A very attractive person has a message for you.",
    "You will become great if you believe in yourself.",
    "The road to riches is paved with homework.",
    "Hard work pays off in the future, laziness pays off now.",
    "Enjoy the good luck a companion brings you",
     "You will live long enough to open many fortune cookies.",
     "Hidden in a valley beside an open stream- This will be the type of place where you will find your dream.",
     'Be on the lookout for coming events; They cast their shadows beforehand.'
]
function crackFortuneCookie(){
    cookieAf.querySelector("#fortune-cookie__text").innerText=fortunes[Math.floor(Math.random()*fortunes.length)];
    changeCookie();
}
function changeCookie(){
    cookieAf.classList.toggle("hidden");
    cookieBf.classList.toggle("hidden")
}
cookieBf.addEventListener("click",crackFortuneCookie)
cookieAf.addEventListener("click",changeCookie)