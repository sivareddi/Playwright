const arr1 = [10, 20, 25, 15, 40];

function sumArray(arr)
{
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(sumArray(arr1));
