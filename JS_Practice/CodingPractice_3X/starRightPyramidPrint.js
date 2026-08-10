// Write your solution here
//const data = require('fs').readFileSync(0, 'utf8');
const numberOfRowsToPrint = 4 //= parseInt(data.trim(), 10);
let formatString = "";
let newLineString = "\n";

if (numberOfRowsToPrint <= 0)
{ 
    console.log("Invalid number");
}
for (let i = 0; i < numberOfRowsToPrint; i++)
{
   
    for (let j = 0; j <= i; j++)
    { 
        formatString = formatString + "*";
    }
    formatString = formatString + " ";
    formatString = formatString + newLineString;
    
}
console.log(formatString);
