//=============================================
// Topic: Null and Undefined
//=============================================
/*  SIMPLE DEFINITIONS:
 * Null: A variable exists, but the developer explicitly assigns "no value" or "empty" value that represents the intentional absence of any object value.
 * Undefined: A variable exists, but nothing is assigned to it. A value that represents the absence of a value.
 */

var x;
console.log(x); // undefined, if variable is not assigned any value, it is considered undefined
console.log("Type of x: " + typeof x); // undefined, if variable is not assigned any value, it is considered undefined


var audi = null;
console.log(audi); // null, if variable is assigned null, it is considered null
console.log("Type of audi: " + typeof audi); // object, as null is a special value in JavaScript

function greet()
{
    // no return statement, so it returns undefined by default
}

console.log("function greet() returned: " + greet()); // undefined, if function does not return any value, it is considered undefined
