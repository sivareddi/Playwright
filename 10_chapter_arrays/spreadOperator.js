
const numbers = [-1, null, Infinity, 6, 0, 4, 5, 3, 2];
console.log(Math.max(...numbers)); // Output: 6
console.log(`Smallest number : ${Math.min(...numbers)}`); // Output: 1

//merging two arrays using spread operator

const array1 = [1, 5, 2, 4];
const array2 = [5, 2, 4, 6];

const mergedArray = [...array1, ...array2];
console.log(mergedArray);

//merging two objects using speard operator

const user = {name: 'Alex', role: 'User', height: 5.9};
const anotherUser = {name: 'John', role: 'Manager', age: 30};

const mergedUsersDetails = {...user, ...anotherUser};

console.log(mergedUsersDetails); // Output: { name: 'John', role: 'Manager', height: 5.9, age: 30 }