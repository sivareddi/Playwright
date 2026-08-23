/*

*****
****
***
**
*

*/
let N = 5;
for(let i=1; i<=N; i++)
{
    for(let j=0; j<=N-i; j++)
    {
        process.stdout.write("*");
    }
    console.log();

}