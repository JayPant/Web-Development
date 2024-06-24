# JavaScript Arrays Guide

## Creation of Arrays

Arrays in JavaScript can be created using square brackets `[]`.

```javascript
let number = [1, 3, 5, 7];
```

## Adding New Elements

### At the End
To add an element at the end of an array, use the `push` method.
```javascript
number.push(9);
```

### At the Beginning
To add an element at the beginning of an array, use the `unshift` method.
```javascript
number.unshift(0);
```

### At the Middle
To add elements in the middle of an array, use the `splice` method.
```javascript
number.splice(2, 0, 'a', 'a', 'a'); // Inserts 'a', 'a', 'a' at index 2
```

## Checking for Values

### In Primitives
To check if an array includes a certain value, use the `includes` method.
```javascript
console.log(number.includes(7)); // true
```

### In Objects
To find an object within an array of objects, use the `find` method.

```javascript
let courses = [
    {roll: 1, namee: 'jay'},
    {roll: 2, namee: 'Djay'}
];

let course = courses.find(course => course.namee === 'jay');
console.log(course); // {roll: 1, namee: 'jay'}
```

## Removing Elements

### From the End
To remove the last element, use the `pop` method.
```javascript
number.pop();
```

### From the Beginning
To remove the first element, use the `shift` method.
```javascript
number.shift();
```

### From the Middle
To remove elements from the middle, use the `splice` method.
```javascript
number.splice(2, 1); // Removes one element at index 2
```

## Emptying an Array

### By Setting Length to 0
Setting the length property to 0 will empty the array.
```javascript
number.length = 0;
console.log(number); // []
```

## Combining and Slicing Arrays

### Combining Arrays
To combine two arrays, use the `concat` method.
```javascript
let first = [1, 2, 3];
let second = [4, 5, 6];
let combined = first.concat(second);
console.log(combined); // [1, 2, 3, 4, 5, 6]
```

### Slicing Arrays
To create a sub-array, use the `slice` method.
```javascript
let slic = combined.slice(1, 4);
console.log(slic); // [2, 3, 4]
```

## Iterating Over Arrays

### Using `for...of` Loop
To iterate over elements of an array, use the `for...of` loop.
```javascript
for (let key of number) {
    console.log(key);
}
```

### Using `forEach` Method
To iterate over elements with a callback function, use the `forEach` method.
```javascript
number.forEach(num => console.log(num));
```

## Transforming Arrays

### Using `map` Method
To create a new array with the results of calling a provided function on every element in the calling array, use the `map` method.
```javascript
let doubled = number.map(num => num * 2);
console.log(doubled); // [2, 6, 10, 14, 18]
```

### Using `filter` Method
To create a new array with all elements that pass the test implemented by the provided function, use the `filter` method.
```javascript
let even = number.filter(num => num % 2 === 0);
console.log(even); // []
```

### Using `sort` Method
To sort the elements of an array in place and return the sorted array, use the `sort` method.
```javascript
let sorted = number.sort((a, b) => a - b); // Ascending order
console.log(sorted); // [1, 3, 5, 7, 9]
```

## Joining Array Elements
To join all elements of an array into a string, use the `join` method.
```javascript
let number = [1, 3, 5, 7, 9];
const joined = number.join(",");
console.log(joined); // "1,3,5,7,9"
```

---
