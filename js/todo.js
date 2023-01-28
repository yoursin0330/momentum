const toDoList = document.querySelector(".todos")
const toDoAddForm = document.querySelector("#todo__add-form");
const toDoInput = toDoAddForm.querySelector("input")
const TODOS_KEY="todos";
let toDos=[];
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
    //toDos array를  localStorage에 넣는 일을 하고 있음!
}

function deleteToDo(event){
    const li=event.target.parentElement
    li.remove()
    toDos=toDos.filter((toDo)=> toDo.id!==parseInt(li.id))
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}
function paintToDo(newTodoObj){
    // todo를 그리는 역할 담당!
    const li=document.createElement("li")
    const checkBox=document.createElement("input")
    checkBox.setAttribute("type","checkbox")
    checkBox.addEventListener("change",function(ev){
        ev.target.parentElement.classList.toggle("checked")
    })
    const span=document.createElement("span")
    const button=document.createElement("button")
    button.innerText="X"
    button.addEventListener("click", deleteToDo)
    li.appendChild(checkBox)
    li.appendChild(span)
    li.appendChild(button)
    span.innerText=newTodoObj.text;
    li.id=newTodoObj.id;
    toDoList.appendChild(li)
    // todo-list 부분 ul안에 자식으로 추가!
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo=toDoInput.value;
    toDoInput.value=""
    const newTodoObj={
        text:newToDo,
        id:Date.now(),
        checked:false
    }
    toDos.push(newTodoObj);
    //toDos는 object를 저장함!
    paintToDo(newTodoObj)
    saveToDos();
}

toDoAddForm.addEventListener("submit",handleToDoSubmit)


const savedToDos = localStorage.getItem(TODOS_KEY) //string 형태
if(savedToDos){//!== null
    const parsedToDos=JSON.parse(savedToDos) //array 형태
    toDos=parsedToDos; //옛날에 저장했던 걸 불러온걸 저장함!
    parsedToDos.forEach(todoObj=> { //arrow function 방식
       //그 array에 있는 각각의 item에 대해 실행해줌
        paintToDo(todoObj)
    });
}