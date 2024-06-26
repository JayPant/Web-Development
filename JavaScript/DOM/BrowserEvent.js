// Dom manipulation

// get element
// set elemtn
// update element
// remove element
// add element



// Event Listner

// Event Target- 1-addEventListner() 2- removeEventListner() 3- dispatchEvents();


// Add Event Listner
// addEventListner(<event-to-listen-for>,<funtion-to-perform>) 


// Remove Event Listner
// removeEventListner(<event-to-listen-for>,<funtion-to-remove>) 


// phases of event

// capturing
// at target phase
// bubbling phase


// adding 100 para- 100 no. of reflows and repaints
for(let i=1;i<=100;i++)
{
        let newElement = document.createElement('p');
        newElement.textContent= 'This is para '+ i;

        document.body.appendChild(newElement);
}


// little optimised number of reflow and repaints is less
let myDiv = document.createElement('div');
for(let i=1;i<=100;i++)
{
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para '+i;

    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);


//  using documentfragement- single reflow and repaint
let fragement = document.createDocumentFragment();

for(let i=1; i<=100; i++){
    let newElement= document.createElement('p');
    newElement.textContent= 'this is para '+i;

    fragement.appendChild(newElement);
}

document.body.appendChild(fragement);


// Call stack
// js is single threaded language- processing of one command at time

function addPara(){
    let para = document.createElement('p');
    para.textContent = "Js is single threaded- Eg 1";
    document.body.appendChild(para);
}

function appendNewMsg()
{
    let para = document.createElement('p');
    para.textContent = "Js is single threaded- Eg 2";
    document.body.appendChild(para);
} 

// promise
let mypromise = new Promise(function(resolve,reject){
setTimeout(() => console.log("timeout"), 5000);
// resolve("Done");
// reject(new ErrorEvent("Error occured promise break"));
});

mypromise.then((value)=> {console.log(value)});

console.log('first');