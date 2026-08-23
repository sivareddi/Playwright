const num = 50;

function sumRecursive(numN)
{
    if(numN === 0)
    {
        return 0;
    }
    return numN + sumRecursive(numN-1);
}
console.log(sumRecursive(num));
