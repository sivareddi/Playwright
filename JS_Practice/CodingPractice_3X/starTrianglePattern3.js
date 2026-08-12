/*

****
 ***
  **
   *

*/
const numberN = 4;
let formatString = ""; 
for(let i = 0; i < numberN; i++)
{
    formatString = "";
    formatString2 = ""
    for(let k = 0; k < i; k++)
    {
       formatString2 = formatString2 + " "; 
    }

    for (let j = numberN-k; j >= 1; j--)
    {
        formatString = formatString + "*";  

    }
    process.stdout.write(formatString);
    console.log();

}