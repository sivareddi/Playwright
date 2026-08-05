/**
 * ============================================
 *  ArrayExamples.js
 *  Basic Array Concepts in JavaScript
 *  ============================================
 */

// ============================================
// 1. CREATING ARRAYS
// ============================================

// Method 1: Array literal (most common)
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log("Fruits array:", fruits);

// Method 2: Using new Array()
let numbers = new Array(10, 20, 30, 40, 50);
console.log("Numbers array:", numbers);

// Method 3: Empty array then add items
let colors = [];
colors[0] = "Red";
colors[1] = "Green";
colors[2] = "Blue";
console.log("Colors array:", colors);
console.log("Length of colors array:", colors.length);

// Method 4: Array with single number (creates empty slots)
let emptySlots = new Array(5); // Creates array of length 5 with empty slots
console.log("Array with 5 empty slots:", emptySlots);
console.log("Length of emptySlots:", emptySlots.length);
console.log("Array [0]", emptySlots[0]); // undefined
console.log("Array [1]", emptySlots[1]); // undefined
console.log("Array [2]", emptySlots[2]); // undefined
console.log("Array [3]", emptySlots[3]); // undefined
console.log("Array [4]", emptySlots[4]); // undefined

// ============================================
// 2. ACCESSING ARRAY ELEMENTS
// ============================================

let animals = ["Dog", "Cat", "Elephant", "Tiger", "Lion"];

console.log("\n--- Accessing Elements ---");
console.log("First element (index 0):", animals[0]);   // Dog
console.log("Second element (index 1):", animals[1]);  // Cat
console.log("Last element:", animals[animals.length - 1]); // Lion

// Accessing non-existent index returns undefined
console.log("Non-existent index:", animals[10]); // undefined


// ============================================
// 3. ARRAY LENGTH PROPERTY
// ============================================

console.log("\n--- Array Length ---");
let cities = ["New York", "London", "Tokyo", "Paris"];
console.log("Cities:", cities);
console.log("Length of cities array:", cities.length);

// Length is mutable - truncating the array
cities.length = 2;
console.log("After setting length to 2:", cities);

// Reset and add more
cities = ["New York", "London", "Tokyo", "Paris"];


// ============================================
// 4. ADDING & REMOVING ELEMENTS
// ============================================

console.log("\n--- Adding & Removing Elements ---");

let stack = [];

// push() - Add to the end
stack.push("Page 1");
stack.push("Page 2");
stack.push("Page 3");
console.log("After push operations:", stack);

// pop() - Remove from the end
let lastItem = stack.pop();
console.log("Popped item:", lastItem);
console.log("After pop:", stack);

// unshift() - Add to the beginning
stack.unshift("Home");
console.log("After unshift (add to beginning):", stack);

// shift() - Remove from the beginning
let firstItem = stack.shift();
console.log("Shifted item:", firstItem);
console.log("After shift:", stack);

// ============================================
// 5. ITERATING OVER ARRAYS
// ============================================

console.log("\n--- Iterating Over Arrays ---");
let scores = [85, 92, 78, 95, 88];

// Method 1: Traditional for loop
console.log("Using for loop:");
for (let i = 0; i < scores.length; i++) {
    console.log(`  Index ${i}: ${scores[i]}`);
}

// Method 2: for...of loop (ES6)
console.log("Using for...of loop:");
for (let score of scores) {
    console.log(`  Score: ${score}`);
}

// Method 3: forEach() method
console.log("Using forEach:");
scores.forEach(function (score, index) {
    console.log(`  scores[${index}] = ${score}`);
});

// Method 4: Using for...in (not recommended for arrays, but works)
console.log("Using for...in loop:");
for (let index in scores) {
    console.log(`  Index ${index}: ${scores[index]}`);
}


// ============================================
// 6. COMMON ARRAY METHODS
// ============================================

console.log("\n--- Common Array Methods ---");

let arr = [1, 2, 3, 4, 5];

// indexOf() - Find index of an element
console.log("Index of 3:", arr.indexOf(3));
console.log("Index of 10 (not found):", arr.indexOf(10));

// includes() - Check if element exists (ES7)
console.log("Includes 4?", arr.includes(4));
console.log("Includes 10?", arr.includes(10));

// join() - Convert array to string
console.log("Joined with '-':", arr.join("-"));

// reverse() - Reverse the array (mutates original)
let reversed = [...arr].reverse(); // Using spread to avoid mutation
console.log("Reversed (copy):", reversed);
console.log("Original array unchanged:", arr);

// concat() - Merge arrays
let moreNumbers = [6, 7, 8];
let merged = arr.concat(moreNumbers);
console.log("Concatenated array:", merged);

// slice() - Extract a portion (does not mutate)
let sliced = arr.slice(1, 4); // index 1 to 3 (4 is exclusive)
console.log("Slice (index 1 to 3):", sliced);

// splice() - Add/Remove at specific index (mutates original)
let spliceArr = ["a", "b", "c", "d", "e"];
console.log("\nOriginal for splice:", spliceArr);
let removed = spliceArr.splice(2, 1, "X", "Y"); // At index 2, remove 1, add X and Y
console.log("Removed elements:", removed);
console.log("After splice:", spliceArr);


// ============================================
// 7. ARRAY TRANSFORMATION METHODS
// ============================================

console.log("\n--- Array Transformation Methods ---");

let nums = [1, 2, 3, 4, 5];

// map() - Transform each element
let doubled = nums.map(function (num) {
    return num * 2;
});
console.log("Original:", nums);
console.log("Doubled (map):", doubled);

// filter() - Filter elements based on condition
let evenNumbers = nums.filter(function (num) {
    return num % 2 === 0;
});
console.log("Even numbers (filter):", evenNumbers);

// reduce() - Reduce array to a single value
let sum = nums.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log("Sum of all numbers (reduce):", sum);

// find() - Find first matching element
let firstGreaterThan3 = nums.find(function (num) {
    return num > 3;
});
console.log("First number > 3 (find):", firstGreaterThan3);

// every() - Check if ALL elements satisfy condition
let allPositive = nums.every(function (num) {
    return num > 0;
});
console.log("All numbers positive? (every):", allPositive);

// some() - Check if ANY element satisfies condition
let hasEven = nums.some(function (num) {
    return num % 2 === 0;
});
console.log("Has any even number? (some):", hasEven);


// ============================================
// 8. MULTI-DIMENSIONAL ARRAYS
// ============================================

console.log("\n--- Multi-dimensional Arrays ---");

// 2D Array (Matrix)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Matrix:");
console.log("  Row 0:", matrix[0]);
console.log("  Element at [1][1]:", matrix[1][1]); // 5

// Iterating a 2D array
console.log("Iterating matrix:");
for (let row = 0; row < matrix.length; row++) {
    let rowStr = "";
    for (let col = 0; col < matrix[row].length; col++) {
        rowStr += matrix[row][col] + " ";
    }
    console.log("  ", rowStr);
}


// ============================================
// 9. SPREAD OPERATOR WITH ARRAYS (ES6)
// ============================================

console.log("\n--- Spread Operator (...) ---");

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Combining arrays
let combined = [...arr1, ...arr2];
console.log("Combined using spread:", combined);

// Copying an array
let copy = [...arr1];
console.log("Copy of arr1:", copy);

// Spread in function calls
function addThree(a, b, c) {
    return a + b + c;
}
let values = [10, 20, 30];
console.log("Sum using spread in function:", addThree(...values));


// ============================================
// 10. ARRAY DESTRUCTURING (ES6)
// ============================================

console.log("\n--- Array Destructuring ---");

let rgb = [255, 100, 50];

// Destructuring assignment
let [red, green, blue] = rgb;
console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);

// Skipping elements with commas
let [, , thirdColor] = rgb;
console.log("Only third element:", thirdColor);

// Swapping variables using destructuring
let a = 10, b = 20;
[a, b] = [b, a];
console.log(`After swap: a = ${a}, b = ${b}`);


// ============================================
// 11. CHECKING IF SOMETHING IS AN ARRAY
// ============================================

console.log("\n--- Array Detection ---");

let unknown = [1, 2, 3];
console.log("Is unknown an array?", Array.isArray(unknown));

let notArray = "Hello";
console.log("Is notArray an array?", Array.isArray(notArray));


// ============================================
// 12. SORTING ARRAYS
// ============================================

console.log("\n--- Sorting Arrays ---");

// String sorting
let names = ["Zara", "Amit", "Bella", "Charlie"];
names.sort();
console.log("Sorted names:", names);

// Number sorting (with compare function)
let unsortedNums = [34, 100, 5, 21, 8];
unsortedNums.sort(function (a, b) {
    return a - b; // Ascending order
});
console.log("Sorted numbers (ascending):", unsortedNums);

// Descending sort
unsortedNums.sort(function (a, b) {
    return b - a;
});
console.log("Sorted numbers (descending):", unsortedNums);

console.log("\n✅ All array examples executed successfully!");