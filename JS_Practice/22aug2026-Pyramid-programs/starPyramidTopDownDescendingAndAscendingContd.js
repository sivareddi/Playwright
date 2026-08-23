/*
 *******
  *****
   ***
    *
   *** 
  *****
 *******  
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
for (let i = N+1; i <= 2*N-1; i++)
{
    formatStr = "";
    for(let j=1; j< 2*N-i; j++)
    {
        formatStr = formatStr + " ";

    }
    for(let j=0 ; j<= 2*(i-N); j++)
    {
        formatStr = formatStr + "*";
    }
    console.log(formatStr);
}


