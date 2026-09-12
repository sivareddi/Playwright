const numbers = [10, 15, 12, 17, 18, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [20, 30, 24, 34, 36, 10];

const prices = [100, 200, 300, 400];
const pricesWithGST = prices.map(price => price * 1.18);
console.log(pricesWithGST);