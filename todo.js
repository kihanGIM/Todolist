const toDoForm= document.querySelector(".js-toDoForm"),
 toDoinput = toDoForm.querySelector("input"),
 toDoList= document.querySelector(".js-toDoList");
 
 
const TODOS_LS = 'toDos';


let toDos = [];

function delteToDos(event){
 const btn =  event.target;
 const li = btn.parentNode;
 toDoList.removeChild(li);
 const cleanToDos = toDos.filter(function(toDo){
  return toDo.id !== parseInt(li.id);
  });
  toDos= cleanToDos
  saveTodos();
}
function saveTodos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text){
const li = document.createElement("li");
const delBtn= document.createElement("button");
delBtn.innerText= "";
delBtn.addEventListener("click", delteToDos)
const span = document.createElement("span");
const newId = toDos.length +1;
span.innerText=text;
li.appendChild(span);
li.appendChild(delBtn);
li.id=newId;
toDoList.appendChild(li);
const toDoObj ={
    text:text,
    id: newId

};
toDos.push(toDoObj);
saveTodos();
}

function handleSumit(event){
event.preventDefault();
const currentValue=toDoinput.value;
paintToDo(currentValue);
toDoinput.vlaue = "";

}


 function loadToDos(){

    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){
       const parsedToDos =JSON.parse(loadedToDos);
       parsedToDos.forEach(function(toDo){
       paintToDo(toDo.text);
       });
    }
       
 }
 function init(){

    loadToDos();
    toDoForm.addEventListener("submit", handleSumit)
 }

 init();