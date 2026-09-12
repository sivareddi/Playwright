const num = -12345;
const reversedNum  = num.toString().split('').reverse().join('');
let reversedNum1 = parseFloat(reversedNum) * Math.sign(num);
console.log(reversedNum1); // Output: -54321
