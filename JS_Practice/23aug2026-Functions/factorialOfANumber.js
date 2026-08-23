const num = 6;
let fact = 1;

function factorial(numberN)
{
    if(num === 0)
    {
        console.log("factorial is 0");
        return 0;
    }
    else 
    {
        for(let i=1; i<= numberN; i++)
        {
            fact = fact * i;
        }
        return fact;
    }
}
    
console.log(factorial(num));

