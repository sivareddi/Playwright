const number = 17;
let count = 0;

if(number === 1)
{
    console.log(`1 is NOT A PRIME NUMBER`);
}
else
{
    for(let i = 1; i <= number/2; i++)
    {
        if(number%i == 0)
        {
            count++ ;
        }
    }

    if (count > 1)
    {
        console.log(`${number} is NOT A PRIME NUMBER`);
    }
    else
    {
        console.log(`${number} is A PRIME NUMBER`);
    }
}
