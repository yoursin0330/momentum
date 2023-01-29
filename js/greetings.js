const loginForm = document.getElementById("login-form")
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting")
const greetingWords=[
    "Good Morning", "Good Afternoon","Good Evening", "Good Night"
]
const HIDDEN_CLASSNAME="hidden"
const USERNAME_KEY="username"

function onLoginSubmit(event){
    event.preventDefault()
    
    const userName=loginInput.value
    loginForm.classList.add(HIDDEN_CLASSNAME)
    localStorage.setItem(USERNAME_KEY,userName)
    paintGreetings()
}

function paintGreetings(){
    const username=localStorage.getItem(USERNAME_KEY)
    const hours=new Date().getHours();
    let greetingExpression;
    if(5<=hours && hours<12){
        greetingExpression=greetingWords[0];
    }else if(hours<5 || hours>22){
        greetingExpression=greetingWords[3];
    }else if(hours<18){
        greetingExpression=greetingWords[1];
    }else{
        greetingExpression=greetingWords[2];
    }
    greeting.innerText=`${greetingExpression}, ${username}!`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername=localStorage.getItem(USERNAME_KEY)

if(savedUsername===null){ //local storage에 username이 없을 때
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit",onLoginSubmit)

}else{
    //show the greetings
    paintGreetings()
    setInterval(paintGreetings,1000)
}
