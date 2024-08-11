function oldcode() {
  //? selecting element

// by id

/* 
  let body = document.getElementById('idValue');
*/

let bodyById = document.getElementById('body');

// console.log(bodyById)

// by querySelector
//! when using the query select, target element just like in  external css
let bodyq = document.querySelector('#body .nav');

console.log(bodyq)

// by querySelectorAll

let allLi = document.querySelectorAll('.tasks li');

allLi.forEach(li=> {
  console.log(li)
})
console.log(allLi)

// ? dom navigation

let navH1 = document.querySelector('.nav h1');

console.log(navH1.parentElement)
console.log(navH1.parentElement.firstElementChild)
console.log(navH1.parentElement.lastElementChild)
console.log(navH1.nextElementSibling)
console.log(navH1.nextElementSibling.previousElementSibling)

//? getting and changing text

/* 
 get text

 variableName.textContent;

 set text

 variableName.textContent = 'value';

*/

let nav = navH1.parentElement;
// gettting text
console.log(nav.textContent)
console.log(nav.innerText)
console.log(nav.innerHTML)

// setting text
// a+=b expand  a= a + b;
navH1.textContent += ' App'

// setting attribute

/* 
 variableName.setAttribute('attributeName','attributeValue');
*/

navH1.setAttribute('title','Todo List App')

// remove attribute

nav.setAttribute('class','nav NAV')

// adding css

// inline css

/* 
 color: red;
 font-size: 2px; | fontSize = '2px';

variableName.style.cssProperty= 'value' 

*/

// navH1.style.color = 'red';
// navH1.style.fontSize = '10px'

// internal css
// when using cssText, write your css rule like you do in your external css

// navH1.style.cssText = `
//  color: red;
//  font-size: 1.5rem;
//  font-style: italic;
// `

// external css

// navH1.setAttribute('class','navH1');

navH1.classList.add('h1Style');
navH1.classList.remove('h1Style');

// create element

/* 
 let p = document.createElement('p');
*/

let li = document.createElement('li');
let spanTask = document.createElement('span');
let spanDelete = document.createElement('span');

// add attributes
li.setAttribute('class','li li4');
spanTask.setAttribute('class','task');
spanDelete.setAttribute('class','delete');

// add text
spanTask.textContent = 'New Task';
spanDelete.textContent = 'Delete';

// rearrange: append or prepend
li.append(spanTask)
li.append(spanDelete)

// add to dom
let taskOl = document.querySelector('.tasks ol');

taskOl.append(li)

//? replacing an element

// replace li1 task span to a tag

/* 
  select li
  create a and add text and attribute
  add to dom
*/

let li1 = document.querySelector('.tasks .li1'); 
let li2 = document.querySelector('.tasks .li2'); 

let a = document.createElement('a');

// add text
a.textContent = 'Learn React Js';

// add attribute

a.setAttribute('href','http://google.com')
a.setAttribute('target','_blank');

// add to dom

li1.replaceChild(a,li1.childNodes[1]);

console.log(li1)
// removing an element;

/* 
  variableName.remove();
*/

li2.remove();

//? htmll event

function handleClick(e) {
  alert('You Clicked Me');
  console.log()
}

function test() {
  alert('a ran');
}

// calling or invoking a function

// test();

//? dom event\




/* 

types of event
click
mouseenter
mouseleave
submit
keyup
keydown
dbclick
scroll

  variable.addEventListener('eventType',function);
*/

let newNav = document.querySelector('.nav');

newNav.addEventListener('click',(e)=>{
  console.log(e.target)
})

}


//! activate dark mode

/* 
  > select the required tags
  > add the required event listener
  > on click of the button tag:
    > change the webpage to dark bg and text to white
    > if the dark mode exist, change btn text to Light Theme else revert
*/

// select required tags
let body = document.querySelector('body');
let themeBtn = document.querySelector('.nav button');

themeBtn.addEventListener('click',(e)=> {
  body.classList.toggle('darkTheme');

  if(String(body.className).includes('darkTheme')) {
    themeBtn.textContent = 'Light Theme';
  }else{
    themeBtn.textContent = 'Dark Theme';

  }
})
// themeBtn.addEventListener('click', function (e) {
//   body.classList.toggle('darkTheme');
//   if(String(body.className).includes('darkTheme')) {
//     themeBtn.textContent = 'Light Theme';
//   }else{
//     themeBtn.textContent = 'Dark Theme';

//   }
// } )
// themeBtn.addEventListener('click', handleTheme )

// function handleTheme (e) {
//   body.classList.toggle('darkTheme');
//   if(String(body.className).includes('darkTheme')) {
//     themeBtn.textContent = 'Light Theme';
//   }else{
//     themeBtn.textContent = 'Dark Theme';

//   }
// }

// (), {}, []
// functionName(parem)

//! activate search

/* 
  > selecte required tags
  > add require event listener
  > get the typed input text in real time
  > get the tasks text
  > convert input text and tasks text to lower or upper case
  > compare the typed input with the tasks text
  > if there is a match, show the tasks having the typed text else hide
   
*/

let searchInput = document.querySelector('.search input');

let allTasks = document.querySelectorAll('.tasks li');


searchInput.addEventListener('keyup',(e)=> {
  let lowerInputText = String(searchInput.value).toLowerCase();

  allTasks.forEach(li=> {
   let  lowerTasksText = String(li.firstElementChild.textContent).toLowerCase() 
      if(lowerTasksText.includes(lowerInputText)) {
        li.style.display = 'flex';
      }else{
        li.style.display = 'none';

      }
  })
})


//! delete task

/* 
  steps to develop algorithm
  > understand the problem
  > write the the psuedocode algorithm or the local steps
  > convert to a script language
  > test the code and handle possible errors or exceptions
*/

/* 
 > select the required tags
 > add event lister to the tasks parent
 > onlick of the delete btn, delete the task for that btn
*/

let taskOl = document.querySelector('.tasks ol');

taskOl.addEventListener('click',(e)=> {
  if(String(e.target.className).includes('delete')) {
    let askUser = confirm('Are You Sure you want to Delete this tAsk?');
    if(askUser) {
      e.target.parentElement.style.display='none'
    }
  }
})

//! activate add tasks

/* 
  > select add task form and the inpute
  > add event lister to the form
  > on form submit: 
   > get the typed input
   > create task li
   > append to task ol
   > reset form
*/

let addTaskForm = document.querySelector('.addTask');
let addTaskInput = addTaskForm.firstElementChild;
let liCount = 3;

addTaskForm.addEventListener('submit',(e)=> {
  e.preventDefault();
  // create element
  let li = document.createElement('li');
  let taskSpan = document.createElement('span');
  let deleteSpan = document.createElement('span');
  // add attribute
  li.setAttribute('class',`li li${liCount +=1}`);
  taskSpan.setAttribute('class', 'task')
  deleteSpan.setAttribute('class', 'delete');

  // add text
  taskSpan.textContent = addTaskInput.value;
  deleteSpan.textContent = 'Delete';

  // rearragne
  li.append(taskSpan);
  li.append(deleteSpan);
   if(String(addTaskInput.value).length > 2) {
     // add to dom
     taskOl.append(li);
     // reset form
     addTaskForm.reset();

   }else{
    alert('Task is not Meaningfull!!!!')
   }
})