/*
 *******
  *****
   ***
    *
*/

let N = 4;
let formatStr = "";
for(let i = 1; i <= N; i++)
{
    formatStr = "";
    for(let j=1; j<i; j++)
    {
        formatStr = formatStr + " ";
    }
    for(let j=0; j<=2*(N-i); j++)
    {
        formatStr = formatStr + "*";
    }
    console.log(formatStr);
}



