// First practise
const inputEl = document.getElementById('taskInput');
const todoArray = [];
function addTodo(){
  const task = inputEl.value;
  todoArray.push(task);
  console.log(todoArray);
  inputEl.value = "";
}

// second practice
const inputEl1 = document.getElementById('taskInput1');
const mainContainer = document.getElementById('listContainer');
const todoArray1 = [];
 
function addTodo1(){
  const task1 = inputEl1.value;
  todoArray1.push(task1);
  console.log(todoArray1);
  inputEl1.value = "";
  renderTodo();
}

function renderTodo(){
  let todoHTML = '';

  for(let i=0; i<todoArray1.length; i++){
    const todo = todoArray1[i];
    // create html element
    const htmlEl =`<p>
    ${todo}
    <button onclick="
    todoArray1.splice(${i}, 1);
    renderTodo();
    ">
    delete
    </button>
    </p>`
    todoHTML+= htmlEl;
    
  }
  mainContainer.innerHTML = todoHTML;
}
renderTodo();

// Third practice
const inputEl2 = document.getElementById('taskInput2');
const dateEl = document.getElementById('dateInput2');
const mainContainer1 = document.getElementById('listContainer1');

const todoArray2 = []

function addTodo2(){
  const todoObj = {
   todoValue : inputEl2.value,
   dateValue : dateEl.value
  }
  todoArray2.push(todoObj);
  console.log(todoArray2);
  inputEl2.value = "";
  dateEl.value = "";
}

function renderTodo1(){
  let todoHTML1 = "";
  for(let i=0; i<todoArray2.length; i++){
    const todo = todoArray2[i];

    // create html elements
    const htmlEl1 = `<div class="container">
    <div></div>
    <div></div>
    <button>Add</button
    </div>`
  }
}