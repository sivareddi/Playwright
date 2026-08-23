const Num = -11;
function isPrimeNumber(num)
{
    let count = 0;
    if (num === 0 || num === 1)
    {
        count = 0;
    }
    else
    {
        for(let i = 1; i <= num/2; i++)
        {   
            if(num % i === 0)
            {
                count++;
            }
        }
    }
    return count;
}

let count = isPrimeNumber(Num);
if (count === 0 || count > 1)
{
    console.log("Not a prime");
}
else
{
    console.log("prime");
}
