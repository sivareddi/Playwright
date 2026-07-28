//================================================================
// Topic: All Number Types in JavaScript
//================================================================
/* 
SIMPLE DEFINITIONS:
1. Number: A numeric data type that represents both integer and floating-point values. In JavaScript, all numbers are represented as 64-bit floating-point values (double precision) according to the IEEE 754 standard.
2. Integer: A whole number without a fractional part. In JavaScript, integers are represented as numbers without decimal points.
3. Floating-point: A number that has a decimal point or is expressed in exponential notation. In JavaScript, floating-point numbers are also represented as numbers, but they can have a fractional part.
4. BigInt: A numeric data type that can represent integers with arbitrary precision. It is used for very large integers that exceed the range of the Number type.
5. NaN (Not-a-Number): A special value that represents an undefined or unrepresentable value, typically resulting from invalid mathematical operations.
6. Infinity: A special value that represents positive infinity, which is greater than any finite number. It can result from division by zero or other mathematical operations.
7. -Infinity: A special value that represents negative infinity, which is less than any finite number. It can result from division by zero or other mathematical operations.

JS uses IEEE 754 double-precision 64-bit binary format to represent numbers, which allows for a wide range of values but can also introduce precision issues for certain calculations.  

*/

//================================================================
// 1. Interger Literals 
//================================================================

// Decimal (Base 10) integer literal - Most common representation of whole numbers
let decimalInteger = 42; // Number
console.log("Decimal Integer: " + decimalInteger); 

//Binary (Base 2) integer literal - Represented with a prefix of "0b" or "0B"
let binaryInteger = 0b101010; // Number
console.log("Binary Integer: " + binaryInteger);

// =================================================================
// 2. Floating-Point Literals
//==================================================================

let float1 = 3.14; // Number
let float2 = -0.5; // Number
let float3 = 0.5; // Number
let float4 = 5.; // Number
let float5 = .5; // Number
console.log("Floating-Point Number: " + float1);
console.log("type of float1: " + typeof float1); // number
console.log("Floating-Point Number: " + float2);
console.log("type of float2: " + typeof float2); // number
console.log("Floating-Point Number: " + float3);
console.log("type of float3: " + typeof float3); // number
console.log("Floating-Point Number: " + float4);
console.log("type of float4: " + typeof float4); // number
console.log("Floating-Point Number: " + float5);
console.log("type of float5: " + typeof float5); // number

//================================================================  
// 3. Exponential Notation (Scientific Notation) Literals
//================================================================
let exp1 = 1.5e3; // Number, equivalent to 1.5 * 10^3 = 1500
console.log("Exponential Notation: " + exp1);
console.log("type of exp1: " + typeof exp1); // number
let exp2 = 2.5e-4; // Number, equivalent to 2.5 * 10^-4 = 0.00025
console.log("Exponential Notation: " + exp2);
console.log("type of exp2: " + typeof exp2); // number
let exp3 = 2E10; // Number, equivalent to 2 * 10^10 = 20000000000
console.log("Exponential Notation: " + exp3);
console.log("type of exp3: " + typeof exp3);
let exp4 = -3.2e-5; // Number, equivalent to -3.2 * 10^-5 = -0.000032
console.log("Exponential Notation: " + exp4);
console.log("type of exp4: " + typeof exp4); // number  

