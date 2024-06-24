// let rectangle = {
//     length: 1,
//     breadth: 2,

//     area: function()
//     {
//         console.log(this.length*this.breadth);
//     }
// }

// Factory Functions
 
// function createRectangle(length,breadth)
// {
//     return rectangle = {
//         length: length,
//         breadth: breadth,
    
//         value: function()
//         {
//             console.log("length: " + this.length + " breadth: " + this.breadth);
//         }
//     }
// } 

// let rectangleobj1 = createRectangle(4,2)



// Constructor Function
// function Rectangle(){
//     this.length=1;
//     this.breadth=2;

//     this.draw = function()
//     {
//         console.log("Created");
//     }
// }

// let recObj = new Rectangle();




let rectangle = {
    length: 1,
    breadth: 2,
}

// for-in loop
for( let key in rectangle){
    console.log(key,rectangle[key])
}

// for-of valid only for iterables but there is hack

for( let key of Object.entries(rectangle)){
        console.log(key);
}

// object-cloning

// By iteration
let a ={value:10};
let b= {};

for(let key in a){
        b[key] = a[key];
}
console.log(b);

// By Assign
let src ={val:12};
let dest= Object.assign({},src);
console.log(dest);

// Spread
let first = {num:14};
let second = {... first};
console.log(second);
