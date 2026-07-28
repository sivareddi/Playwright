//=====================================================
// Key differences between undefined and null
//=====================================================

/* 1. Undefined is a type itself (undefined), while null is an object.
 * 2. Undefined is the default value of uninitialized variables, while null is an assignment value that represents no value.
 * 3. Undefined indicates that a variable has been declared but has not yet been assigned a value, while null indicates that a variable has been explicitly assigned a null value.
 * 4. Undefined is a primitive value, while null is an object.  */

let x;
console.log(x);
console.log("Type of x: " + typeof x); // undefined, if variable is not assigned any value, it is considered undefined  
let y = null;   
console.log(y);
console.log("Type of y: " + typeof y); // object, as null is a special value in JavaScript

let z = ""; // empty string
console.log(z);
console.log("Type of z: " + typeof z); // string, as empty string is a valid string value

console.log(x == y); // true, because both represent the absence of a value
console.log(x === y); // false, because they are of different types (undefined vs null) 
console.log(x == z); // false, because undefined is not equal to an empty string
console.log(y == z); // false, because null is not equal to an empty string 
