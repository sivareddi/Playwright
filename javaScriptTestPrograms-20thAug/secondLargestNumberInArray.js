const numbers = [5, 1, 4, 9, 8, 2, 0];
let max = -Infinity ;
let secondMax = -Infinity;

if(numbers.length < 2)
{
    console.log("Not enough numbers in array");
}
else 
{
    for (let i = 0 ; i < numbers.length-1; i++)
    {
        if(numbers[i] > max)
        {
            secondMax = max;
            max = numbers[i];
        }
        else if (numbers[i] < max && numbers[i] > secondMax)
        {
            secondMax = numbers[i];
            
        }
    }
    console.log(`Largest number: ${max}`);
    console.log(`Second largest number is : ${secondMax}`);
}