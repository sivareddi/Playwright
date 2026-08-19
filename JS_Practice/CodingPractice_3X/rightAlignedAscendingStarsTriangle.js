/*

   *
  **
 ***
****

*/

const n = 6;
for(let i = 1; i <= n; i++)
{
    let formatString = "";
    for(let j = 1; j <= n-i; j++)
    {
        formatString = formatString + " ";
    }
    for(let j = 1; j <= i; j++)
    {
        formatString = formatString + "*";
    }
    console.log(formatString);
}
