let value1 = 10 > 5;
console.log("Is 10 greater than 5? ", value1, typeof value1); // true

let value2 = 10 < 5;
console.log("Is 10 less than 5? ", value2, typeof value2); // false

console.log(10 == 10); // true
console.log(10 === 10); // true
console.log(10 === "10"); // false (strict equality checks both value and type)

console.log(10 != 5); // true
console.log(10 !== "10"); // true (strict inequality checks both value and type)