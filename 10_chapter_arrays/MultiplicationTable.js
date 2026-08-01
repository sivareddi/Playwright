//const data = require('fs').readFileSync(0, 'utf8');
// Write your solution here
let data = 3
let output = '';
let inputNumber = Number(data);
if (typeof inputNumber !== 'number' || isNaN(inputNumber)) {
    console.log("Invalid number1");
} else if (inputNumber % 1 !== 0) {
    console.log("Invalid number2");
} else if (inputNumber < 0) { 
    console.log("Invalid number3");
} else {

    let results = [];
    for (let i = 1; i <= 10; i++) {
        results.push(inputNumber + " x " + i + " = " + inputNumber * i); 
    }
    output = results.join(' ');
    console.log(output);
}
