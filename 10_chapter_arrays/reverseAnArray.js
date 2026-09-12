const fruits = ["Apple", "Banana", "Cherry", "Date"];
// Array mutation - reverse() method impacts the original array as well.
console.log(fruits.reverse());
console.log(fruits);

// Non-mutating reverse() method - using spread operator to create a copy of the original array and then reversing it.
// ... is called spread operator, which creates a shallow copy of the original array and then reverse() method is applied to the copied array, leaving the original array unchanged.
const oldFruits = ["Apple", "Banana", "Cherry", "Date"];
const newArr = [...oldFruits].reverse();
console.log(newArr);
console.log(oldFruits);


