# Array Examples in JavaScript

> Comprehensive guide covering basic to intermediate array concepts with executable code examples.

---

## 1. Creating Arrays

```javascript
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

// Method 4: Array with single number (creates empty slots)
let emptySlots = new Array(5);
console.log("Array with 5 empty slots:", emptySlots);
console.log("Length:", emptySlots.length);
```

**Output:**
```
Fruits array: [ 'Apple', 'Banana', 'Mango', 'Orange' ]
Numbers array: [ 10, 20, 30, 40, 50 ]
Colors array: [ 'Red', 'Green', 'Blue' ]
Array with 5 empty slots: [ <5 empty items> ]
Length: 5
```

---

## 2. Accessing Array Elements

```javascript
let animals = ["Dog", "Cat", "Elephant", "Tiger", "Lion"];

// Access by index (0-based)
console.log("First element:", animals[0]);     // Dog
console.log("Second element:", animals[1]);    // Cat
console.log("Last element:", animals[animals.length - 1]); // Lion

// Non-existent index returns undefined
console.log("Non-existent index:", animals[10]); // undefined
```

**Output:**
```
First element: Dog
Second element: Cat
Last element: Lion
Non-existent index: undefined
```

---

## 3. Array Length Property

```javascript
let cities = ["New York", "London", "Tokyo", "Paris"];
console.log("Cities:", cities);
console.log("Length:", cities.length);

// Length is mutable — truncating the array
cities.length = 2;
console.log("After setting length to 2:", cities);
```

**Output:**
```
Cities: [ 'New York', 'London', 'Tokyo', 'Paris' ]
Length: 4
After setting length to 2: [ 'New York', 'London' ]
```

---

## 4. Adding & Removing Elements

```javascript
let stack = [];

// push() — Add to the end
stack.push("Page 1");
stack.push("Page 2");
stack.push("Page 3");
console.log("After push:", stack);

// pop() — Remove from the end
let lastItem = stack.pop();
console.log("Popped item:", lastItem);
console.log("After pop:", stack);

// unshift() — Add to the beginning
stack.unshift("Home");
console.log("After unshift:", stack);

// shift() — Remove from the beginning
let firstItem = stack.shift();
console.log("Shifted item:", firstItem);
console.log("After shift:", stack);
```

**Output:**
```
After push: [ 'Page 1', 'Page 2', 'Page 3' ]
Popped item: Page 3
After pop: [ 'Page 1', 'Page 2' ]
After unshift: [ 'Home', 'Page 1', 'Page 2' ]
Shifted item: Home
After shift: [ 'Page 1', 'Page 2' ]
```

---

## 5. Iterating Over Arrays

```javascript
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
```

**Output:**
```
Using for loop:
  Index 0: 85
  Index 1: 92
  Index 2: 78
  Index 3: 95
  Index 4: 88
Using for...of loop:
  Score: 85
  Score: 92
  Score: 78
  Score: 95
  Score: 88
Using forEach:
  scores[0] = 85
  scores[1] = 92
  scores[2] = 78
  scores[3] = 95
  scores[4] = 88
```

---

## 6. Common Array Methods

```javascript
let arr = [1, 2, 3, 4, 5];

// indexOf() — Find index of an element
console.log("Index of 3:", arr.indexOf(3));       // 2
console.log("Index of 10 (not found):", arr.indexOf(10)); // -1

// includes() — Check if element exists (ES7)
console.log("Includes 4?", arr.includes(4));      // true
console.log("Includes 10?", arr.includes(10));    // false

// join() — Convert array to string
console.log("Joined with '-':", arr.join("-"));   // 1-2-3-4-5

// reverse() — Reverse the array (mutates original)
let reversed = [...arr].reverse(); // Spread to avoid mutation
console.log("Reversed (copy):", reversed);
console.log("Original unchanged:", arr);

// concat() — Merge arrays
let merged = arr.concat([6, 7, 8]);
console.log("Concatenated:", merged);

// slice() — Extract portion (does NOT mutate)
let sliced = arr.slice(1, 4); // index 1 to 3
console.log("Slice (1 to 3):", sliced);

// splice() — Add/Remove at specific index (mutates)
let spliceArr = ["a", "b", "c", "d", "e"];
let removed = spliceArr.splice(2, 1, "X", "Y");
console.log("Removed:", removed);
console.log("After splice:", spliceArr);
```

**Output:**
```
Index of 3: 2
Index of 10 (not found): -1
Includes 4? true
Includes 10? false
Joined with '-': 1-2-3-4-5
Reversed (copy): [ 5, 4, 3, 2, 1 ]
Original unchanged: [ 1, 2, 3, 4, 5 ]
Concatenated: [ 1, 2, 3, 4, 5, 6, 7, 8 ]
Slice (1 to 3): [ 2, 3, 4 ]
Removed: [ 'c' ]
After splice: [ 'a', 'b', 'X', 'Y', 'd', 'e' ]
```

---

## 7. Array Transformation Methods

```javascript
let nums = [1, 2, 3, 4, 5];

// map() — Transform each element
let doubled = nums.map(num => num * 2);
console.log("Doubled (map):", doubled);

// filter() — Filter elements based on condition
let evenNumbers = nums.filter(num => num % 2 === 0);
console.log("Even numbers (filter):", evenNumbers);

// reduce() — Reduce array to a single value
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log("Sum (reduce):", sum);

// find() — Find first matching element
let firstGreaterThan3 = nums.find(num => num > 3);
console.log("First > 3 (find):", firstGreaterThan3);

// every() — Check if ALL elements satisfy condition
let allPositive = nums.every(num => num > 0);
console.log("All positive? (every):", allPositive);

// some() — Check if ANY element satisfies condition
let hasEven = nums.some(num => num % 2 === 0);
console.log("Has even? (some):", hasEven);
```

**Output:**
```
Doubled (map): [ 2, 4, 6, 8, 10 ]
Even numbers (filter): [ 2, 4 ]
Sum (reduce): 15
First > 3 (find): 4
All positive? (every): true
Has even? (some): true
```

---

## 8. Multi-dimensional Arrays

```javascript
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
    console.log(" ", rowStr);
}
```

**Output:**
```
Matrix:
  Row 0: [ 1, 2, 3 ]
  Element at [1][1]: 5
Iterating matrix:
  1 2 3 
  4 5 6 
  7 8 9 
```

---

## 9. Spread Operator with Arrays (ES6)

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Combining arrays
let combined = [...arr1, ...arr2];
console.log("Combined:", combined);

// Copying an array
let copy = [...arr1];
console.log("Copy:", copy);

// Spread in function calls
function addThree(a, b, c) {
    return a + b + c;
}
let values = [10, 20, 30];
console.log("Sum using spread:", addThree(...values));
```

**Output:**
```
Combined: [ 1, 2, 3, 4, 5, 6 ]
Copy: [ 1, 2, 3 ]
Sum using spread: 60
```

---

## 10. Array Destructuring (ES6)

```javascript
let rgb = [255, 100, 50];

// Destructuring assignment
let [red, green, blue] = rgb;
console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);

// Skipping elements with commas
let [, , thirdColor] = rgb;
console.log("Only third element:", thirdColor);

// Swapping variables
let a = 10, b = 20;
[a, b] = [b, a];
console.log(`After swap: a = ${a}, b = ${b}`);
```

**Output:**
```
Red: 255, Green: 100, Blue: 50
Only third element: 50
After swap: a = 20, b = 10
```

---

## 11. Checking if Something is an Array

```javascript
let unknown = [1, 2, 3];
console.log("Is unknown an array?", Array.isArray(unknown)); // true

let notArray = "Hello";
console.log("Is notArray an array?", Array.isArray(notArray)); // false
```

**Output:**
```
Is unknown an array? true
Is notArray an array? false
```

---

## 12. Sorting Arrays

```javascript
// String sorting
let names = ["Zara", "Amit", "Bella", "Charlie"];
names.sort();
console.log("Sorted names:", names);

// Number sorting (with compare function)
let unsortedNums = [34, 100, 5, 21, 8];
unsortedNums.sort((a, b) => a - b); // Ascending
console.log("Sorted numbers (ascending):", unsortedNums);

unsortedNums.sort((a, b) => b - a); // Descending
console.log("Sorted numbers (descending):", unsortedNums);
```

**Output:**
```
Sorted names: [ 'Amit', 'Bella', 'Charlie', 'Zara' ]
Sorted numbers (ascending): [ 5, 8, 21, 34, 100 ]
Sorted numbers (descending): [ 100, 34, 21, 8, 5 ]
```

---

## Quick Reference Table

| Method         | Description                          | Mutates? | Returns         |
|----------------|--------------------------------------|----------|-----------------|
| `push()`       | Add to end                           | ✅ Yes   | New length      |
| `pop()`        | Remove from end                      | ✅ Yes   | Removed element |
| `unshift()`    | Add to beginning                     | ✅ Yes   | New length      |
| `shift()`      | Remove from beginning                | ✅ Yes   | Removed element |
| `splice()`     | Add/remove at index                  | ✅ Yes   | Removed items   |
| `reverse()`    | Reverse order                        | ✅ Yes   | Reversed array  |
| `sort()`       | Sort elements                        | ✅ Yes   | Sorted array    |
| `slice()`      | Extract portion                      | ❌ No    | New array       |
| `concat()`     | Merge arrays                         | ❌ No    | New array       |
| `map()`        | Transform each element               | ❌ No    | New array       |
| `filter()`     | Filter elements                      | ❌ No    | New array       |
| `reduce()`     | Reduce to single value               | ❌ No    | Single value    |
| `find()`       | Find first match                     | ❌ No    | Element or `undefined` |
| `every()`      | All elements satisfy condition?      | ❌ No    | Boolean         |
| `some()`       | Any element satisfies condition?     | ❌ No    | Boolean         |
| `includes()`   | Check if value exists                | ❌ No    | Boolean         |
| `indexOf()`    | Find index of value                  | ❌ No    | Index or `-1`   |
| `join()`       | Convert to string                    | ❌ No    | String          |

---

> **Tip:** Copy any code block into a `.js` file and run it with `node filename.js` to see the output live!