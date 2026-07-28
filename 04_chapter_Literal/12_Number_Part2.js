//=======================================================
// 3. NUMERIC SEPARATOR (_)
//=======================================================

// Numeric separator (_) is a feature introduced in ECMAScript 2021 (ES12) that allows you to use underscores as separators in numeric literals for better readability. It can be used in integer and floating-point literals, but not at the beginning or end of a number, or adjacent to a decimal point or exponent.

// Example of using numeric separators in integer literals
let million = 1_000_000; // 1 million
console.log("Million: " + million); // 1000000
console.log("Type of million: " + typeof million); // number

let binarySeparator = 0b1010_1011; // Binary literal with separator
console.log("Binary with separator: " + binarySeparator); // 171
console.log("Type of binarySeparator: " + typeof binarySeparator);

let hexSeparator = 0xFF_FF_FF; // Hexadecimal literal with separator
console.log("Hexadecimal with separator: " + hexSeparator); // 16777215
console.log("Type of hexSeparator: " + typeof hexSeparator);

//=======================================================
// 4. BIGINT LITERALS - For arbitarily large integers
//=======================================================

let bigInt1 = 1234567890123456789012345678901234567890n; // BigInt literal
console.log("BigInt: " + bigInt1);
console.log("Type of bigInt1: " + typeof bigInt1);

let big2 = BigInt(1234567890123456789012345678901234567890); // BigInt using constructor
console.log("BigInt using constructor: " + big2);
console.log("Type of big2: " + typeof big2);    

let bigFromNumber = BigInt(12345678901234567890); // BigInt from Number
console.log("BigInt from Number: " + bigFromNumber);
console.log("Type of bigFromNumber: " + typeof bigFromNumber);

//=======================================================
// 5. NaN (Not-a-Number) and Infinity
//=======================================================
// Infinity
let positiveInfinity = Infinity; // Positive Infinity
console.log("Positive Infinity: " + positiveInfinity);
console.log("Type of positiveInfinity: " + typeof positiveInfinity); // number

let negativeInfinity = -Infinity; // Negative Infinity
console.log("Negative Infinity: " + negativeInfinity);
console.log("Type of negativeInfinity: " + typeof negativeInfinity); // number

console.log("Infinity :" + Infinity); // Infinity
console.log("1/0: " + 1/0); // Infinity
console.log("-1/0: " + -1/0); // -Infinity

// NaN (Not-a-Number) - result of an invalid mathematical operation
let notANumber = NaN; // NaN literal         
console.log("Not a Number: " + notANumber);
console.log("Type of notANumber: " + typeof notANumber); // number

console.log("0/0: " + 0/0); // NaN
console.log("'siva' * 2: " + 'siva' * 2); // NaN


