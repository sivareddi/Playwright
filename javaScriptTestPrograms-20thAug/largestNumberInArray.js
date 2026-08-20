const numbers = [5, 8, 99, 11, 44, 14, 100, 44];
let largestNumber = 0;
for(let i = 0; i <= numbers.length-1; i++)
{
    if(numbers[i] > largestNumber)
    {
        largestNumber = numbers[i];
    }
}
console.log(`Largest number in Array is: ${largestNumber}`);