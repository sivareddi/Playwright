/*
    *
   **
  ***
 ****
*****

*/
let N = 5;
formatStr = "";
for(let i = 1; i <= N; i++)
{
    formatStr = "";
    for(let j=1; j<=N-i; j++)
    {
        formatStr = formatStr + " ";
    }
    for(let j=0; j<i; j++)
    {
        formatStr = formatStr + "*";
    }
    console.log(formatStr);
}