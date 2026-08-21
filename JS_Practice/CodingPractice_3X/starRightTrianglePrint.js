/*
*
**
***
****
*/
// Write your solution here
//const data = require('fs').readFileSync(0, 'utf8');
const numberOfRowsToPrint = 4 //= parseInt(data.trim(), 10);
let formatString = "";
//let newLineString = "\n";

if (numberOfRowsToPrint <= 0)
{ 
    console.log("Invalid number");
}
for (let i = 1; i <= numberOfRowsToPrint; i++)
{
    formatString = "";
    for (let j = 1; j <= i; j++)
    { 
        formatString = formatString + "*";
    }
   // process.stdout.write(formatString);
    console.log(formatString);
    
}
