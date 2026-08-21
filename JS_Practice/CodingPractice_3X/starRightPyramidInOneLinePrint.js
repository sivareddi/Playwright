// Write your solution here
//const data = require('fs').readFileSync(0, 'utf8');
const numberOfRowsToPrint = 4 //= parseInt(data.trim(), 10);
let formatString = "";

if (numberOfRowsToPrint <= 0)
{ 
    console.log("Invalid number");
}
for (let i = 1; i <= numberOfRowsToPrint; i++)
{
   
    for (let j = 1; j <= (2*(i-1))+1; j++)
    { 
        formatString = formatString + "*" ;
    }
    if(i < numberOfRowsToPrint)
    {
        formatString = formatString + " " ;
    }
    
}
console.log(formatString);
