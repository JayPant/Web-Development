Here's the content for your README file:

---

# JavaScript Functions and Object Properties

This document covers some basic concepts and code snippets related to functions and object properties in JavaScript.

## Function Declaration

A function declaration is a basic way to define a function.

```javascript
function run() {
    console.log("Running");
}
run();
```

## Function Assignment

You can assign a function to a variable.

```javascript
let man = function walk() {
    console.log("walk");
}
man();

let person2 = man;
person2();
```

## Handling Arguments

In JavaScript, you can handle multiple arguments using the `arguments` object.

```javascript
function sum(a, b) {
    let total = 0;
    for (let value of arguments) {
        total += value;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6));
```

## Rest Operator

The rest operator (`...`) allows you to represent an indefinite number of arguments as an array.

```javascript
function calc(...args) {
    console.log(args);
}
calc(1, 5, 7);

function calc1(num1, ...args) {
    console.log(args);
}
calc1(1, 5, 7, 3, 13, 30, 38);
```

## Default Parameters

You can set default values for function parameters.

```javascript
function interest(p, r, t = 5) {
    return p * r * t / 100;
}

console.log(interest(1000, 5));
```

## Getter and Setter

JavaScript objects can have getter and setter methods to manipulate properties.

```javascript
let person = {
    fname: "Dhananjay",
    lname: "Pant",

    get fullname() {
        return `${this.fname} ${this.lname}`;
    },

    set fullname(values) {
        if (typeof values !== 'string') {
            throw new Error("You haven't set a string");
        }

        let parts = values.split(' ');
        this.fname = parts[0];
        this.lname = parts[1];
    }
};

// Example usage
// person.fullname = "Jay Pant"
// console.log(person.fullname);
```

## Try & Catch - Exception Handling

You can use try and catch blocks to handle exceptions in JavaScript.

```javascript
try {
    person.fullname = true;
} catch (e) {
    alert(e);
}
```

---

This README file provides an overview of function declarations, function assignments, argument handling, the rest operator, default parameters, getters and setters, and exception handling in JavaScript.