// Arrays

// creation
// let number = [1,3,5,7];

// // adding new element

// // at end
// number.push(9);

// // at begin
// number.unshift(0);

// // at middle
// number.splice(2,0,'a','a','a');

// // check for value in primitives
// console.log(number.includes(7));


// // check for value in objects
// let courses= [
//     {roll:1,namee:'jay'},
//     {roll:2,namee:'Djay'}
// ];

// let course = courses.find(function(course){
//     return course.namee === 'jay';
// });

// reducing line of codes by arrow function

// let  course = courses.find(course => course.namee === 'jay');

// console.log(course);

// removing element

// let number = [1,3,5,7,9];
// // pop-last
// number.pop();

// // shift-first
// number.shift();

// // splice-middle
// number.splice(2,1);

// console.log(number);


// // Emptying a array;

// let number = [1,3,5,7,9];

// console.log(number);

// // length
// number.length=0;
// console.log(number);


// Combining & Slicing

// let first = [1,2,3];
// let second = [4,5,6];
// let combined= first.concat(second);
// console.log(combined);

// let slic= combined.slice(1,4);
// console.log(slic);


// iterating array

// for of

// let number = [1,3,5,7,9];
// for(let key of number ){
//     console.log(key);
// }

// for-each
// number.forEach(num =>console.log(num));


// join array
let number = [1,3,5,7,9];
const joind = number.join(",");
console.log(joind);


