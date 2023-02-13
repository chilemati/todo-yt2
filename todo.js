// get month from date object
let d = new Date();
//  console.log(d.toDateString()[0])
let date = d.toDateString();

// console.log(date.split(' ')[3]);
// target nav h1
let navH1 = document.querySelector('.nav h1');
navH1.textContent += date.split(' ')[1] + ', ' + groupBySpace(date,2) + " " + date.split(' ')[3];
// console.log(navH1);
// 


// target nav button
let navButton = document.querySelector('.nav button');
let getBody = document.querySelector('body');
// console.log(navButton);

navButton.addEventListener("click", (e)=> {
e.preventDefault(e);
getBody.classList.toggle('darkTheme');
if(getBody.className === "darkTheme"){
    navButton.textContent="Light Theme";
    showDiag('Your are now in Dark Mode');
}
else{
    navButton.textContent="Dark Theme";
    showDiag('Back to Light Mode');

}
// console.log(getBody.className);
})
//


// console.log(todos);
/*
STEPS TO ACTIVATE A SEARCH BAR:
// get the search input
// add a keyup event listener to the search input
// in the event listener: {
    // get the element holding each task or the li. not the ol
// convert the values from the input to lowercase
    // use foreach to loop through the html array collection
    // in the foreach: {
        // get the firstelementchild of the text tag and convert to lowercase
        // use indexOf() to check of the values from search input exist in the text tags
        // if true, show the tasks else hide tasks
    }
}

*/

let getSearch= document.querySelector('.search  input');

// console.log(taskLi);
getSearch.addEventListener('keyup', ()=> {
    let searchValue= getSearch.value;
    let lowerValue= searchValue.toLowerCase();
    let taskLi= document.querySelectorAll('.tasks li');
    // console.log(lowerValue);
    taskLi.forEach(x => {
        // console.log(x.firstElementChild.textContent);
        if(x.firstElementChild.textContent.toLocaleLowerCase().indexOf(lowerValue) != -1){
            // console.log('true');
            x.style.display='flex';
        }
        else{
            // console.log('false');
            x.style.display='none';
        }
        
    });
})


//  adding tasks

let getForm = document.querySelector('.addTask');

function addNewTasks() {
    // create tags
let newLi= document.createElement('li');
let newSpan1= document.createElement('span');
let newSpan2= document.createElement('span');
let getTaskOl = document.querySelector('.tasks ol');
// add class to tags
newSpan1.classList.add('task');
newSpan2.classList.add('delete');
newLi.classList.add('li');
// append
newLi.appendChild(newSpan1);
newLi.appendChild(newSpan2);
// get addTask input and append newLi
let getAddTask = document.querySelector('.addTask input');


 let addTaskInput= getAddTask.value;

 if(String(addTaskInput).length%20 == 0) {
    showDiag('Task need to be short');
   
 }
 else{
    newSpan1.style.textTransform='capitalize';
    newSpan1.innerHTML= addTaskInput;
    newSpan2.innerHTML= 'Delete';
    getTaskOl.appendChild(newLi);
    getForm.reset();
    showDiag('New task added Successfullyyyyyyyyyyyyyyyyyyyyyyyyyy!')
 }


 
}

getForm.addEventListener('submit', (e)=> {
    e.preventDefault(e);
addNewTasks();


})




// delect tasks

// in order to delete added task, add the event listener on the task section element and not on the tag containing the task to be deleted

let getDelClass = document.querySelectorAll('.tasks');


//  console.log(getDelClass);

 getDelClass.forEach(x => {
   x.addEventListener('click', (e) => {
    // console.log(e.target.className);
    // console.log(x);

    if(e.target.className == 'delete') {
        e.target.parentElement.style.display='none';
        showDiag('Task Deleted Successfully!');
    }
   })
 });

 let getDiag = document.querySelector('.diag');
    getDiag.style.display='none';
 function showDiag(a){
    //  diag
    let getDiagText=getDiag.querySelector('.info');

    let getClose=getDiag.querySelector('.close');
    getDiag.style.display='flex';
    getDiag.classList.add('diagState');
    getDiagText.value=a;

    getClose.addEventListener('click', ()=> {
    getDiag.classList.remove('diagStage');
   let getDiagForm= document.querySelector('.diagReset').reset();
    getDiag.style.display='none';

})
 }

 


// functions
function groupBySpace(a,b) {
    a= Array.from(a);
    let h='', result = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] != ' ') {
            h += a[i];
        } else {
            result.push(h);
            h = '';
            
        }
        // console.log(a[i])
    }
    (h != ' ') ? result.push(h) : ' ';

    return b? result[b]: result.join(' ');
}