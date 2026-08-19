
/* 
   *
  ***
 *****
*******

*/


const n = 4 //= parseInt(data.trim(), 10);
// let formatString = "";

if (n <= 0 || !(Number.isInteger(n)))
{ 
    console.log("Invalid number");
}
else 
{
    for (let i = 1; i <= n; i++)
    {
        let formatString = "";
        for (let j = 1; j <= n-i; j++)
        {
            formatString = formatString + " ";
        }

        for (let k = 1; k <= (2*i)-1; k++)
        {
            formatString = formatString + "*";
        }
        console.log(formatString);        
        
    }
 
}