// declaration

function run(){
    console.log("Running");
}
run();

// function assignment

let man = function walk()
{
    console.log("walk");
}
man();

let person2 = man;
person2();

// 
function sum(a,b)
{
    let total =0;
    for(let value of arguments)
        {
            total+=value;
        }
    
        return total;
}

console.log(sum(1,2,3,4,5,6));

// rest operator
function calc(...args)
{
    console.log(args);
}
calc(1,5,7);


function calc1(num1,...args)
{
    console.log(args);
}
calc(1,5,7,3,13,30,38);

// Defualt Parameters

function interest(p,r,t=5)
{
    return p*r*t/100;
}

console.log(interest(1000,5));

// getter and setter
let person = {
    fname: "Dhananjay",
    lname: "Pant",

    get fullname(){
        return `${person.fname} ${person.lname}`;
    },

    set fullname(values){

        if(typeof values!= String){
                throw new Error("You haven't set a string");
        }
        
        let parts = values.split(' ');
        this.fname=parts[0];
        this.lname=parts[1];
    }
};

// person.fullname = "Jay Pant"
// console.log(person.fullname);


// try & catch - Exception HAndling
try{
    person.fullname=  true;
}catch(e){
    alert(e);
}