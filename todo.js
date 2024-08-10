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

//? dom eveent

/* 
  variable.addEventListener('eventType',function);
*/

bodyById.addEventListener('click',(e)=> {
  console.log(e.target)
})

li1.addEventListener('mouseleave',(e)=> {
  alert('Mouse left')
})