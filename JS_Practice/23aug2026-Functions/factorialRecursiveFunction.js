const num = 6;

function factRecursive(numN)
{
    if(numN === 0)
    {
        return 1;
    }
    else
    {
        
        return numN * factRecursive(numN - 1);
    }
}
console.log(factRecursive(num));
