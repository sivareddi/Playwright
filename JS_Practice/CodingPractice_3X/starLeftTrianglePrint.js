/*

****
***
**
*

*/
// Write your solution here
//const data = require('fs').readFileSync(0, 'utf8');
const n = 4 //= parseInt(data.trim(), 10);
let formatString = "";

if (n <= 0 || !(Number.isInteger(n)))
{ 
    console.log("Invalid number");
}
for (let i = 0; i < n; i++)
{
    formatString = "";
    for (let j = 0; j < (n-i); j++)
    { 
        formatString = formatString + "*";
    }
   // process.stdout.write(formatString);
   //console.log();
    console.log(formatString);
    
}
