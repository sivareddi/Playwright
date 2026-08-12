//Array with string elements
const users = ["Admin", "Manager", "Guest"];
//Array with number elements
const numbers = [25, 12, 9, 7, 15];
//Array with mixed data types
const values = ["John", 25, true];

console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
//console.log(users[3]); //Accessing outside index value - undefined output.

//First element access
console.log(numbers[0]);
//Last element access
console.log(numbers[numbers.length-1]);

//First element access
console.log(values[0]);
//Last element access
console.log(values[values.length-1]);
//Array length
console.log(values.length);
