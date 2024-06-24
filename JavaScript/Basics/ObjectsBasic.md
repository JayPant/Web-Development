
# JavaScript Object Creation, Iteration, and Cloning

## Object Literal

An object literal is a simple way to create a single object with predefined properties and methods.

```javascript
let rectangle = {
    length: 1,
    breadth: 2,

    area: function() {
        console.log(this.length * this.breadth);
    }
};

// Example usage:
rectangle.area(); // Outputs: 2
```

## Factory Functions

Factory functions create and return new objects. They allow for the creation of multiple objects with the same properties and methods.

```javascript
function createRectangle(length, breadth) {
    return {
        length: length,
        breadth: breadth,

        value: function() {
            console.log("length: " + this.length + " breadth: " + this.breadth);
        }
    };
}

let rectangleobj1 = createRectangle(4, 2);

// Example usage:
rectangleobj1.value(); // Outputs: length: 4 breadth: 2
```

## Constructor Functions

Constructor functions initialize new objects using the `new` keyword. They are a more formal way of creating objects compared to factory functions.

```javascript
function Rectangle(length, breadth) {
    this.length = length;
    this.breadth = breadth;

    this.draw = function() {
        console.log("Created");
    };
}

let recObj = new Rectangle(4, 2);

// Example usage:
recObj.draw(); // Outputs: Created
console.log("Length: " + recObj.length + ", Breadth: " + recObj.breadth); // Outputs: Length: 4, Breadth: 2
```

## Iterating Over Object Properties

### Using `for-in` Loop

The `for-in` loop is used to iterate over the properties of an object.

```javascript
let rectangle = {
    length: 1,
    breadth: 2,
};

for (let key in rectangle) {
    console.log(key, rectangle[key]);
}

// Outputs:
// length 1
// breadth 2
```

### Using `for-of` Loop with `Object.entries`

The `for-of` loop is typically used for iterables, but it can be used with objects by converting the object properties into an iterable format using `Object.entries`.

```javascript
for (let [key, value] of Object.entries(rectangle)) {
    console.log(key, value);
}

// Outputs:
// length 1
// breadth 2
```

## Object Cloning

### By Iteration

You can clone an object by iterating over its properties and copying them to a new object.

```javascript
let a = { value: 10 };
let b = {};

for (let key in a) {
    b[key] = a[key];
}
console.log(b);
```

### Using `Object.assign`

The `Object.assign` method can also be used to clone an object.

```javascript
let src = { val: 12 };
let dest = Object.assign({}, src);
console.log(dest);
```

### Using Spread Operator

The spread operator (`...`) can be used to clone an object in a more concise way.

```javascript
let first = { num: 14 };
let second = { ...first };
console.log(second);
```

