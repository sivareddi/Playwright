const numbers = [0, 1, 2, 3, 4, 5, 6, 3, 2, 1, -1, -4, -2, -3];
let smallest = Infinity;
let secondSmallest = Infinity;
for (let i = 0; i <= numbers.length-1; i++)
{
    if(numbers[i] < smallest)
    {
        secondSmallest = smallest;  
        smallest = numbers[i];
    }
    else if (numbers[i] > smallest && numbers[i] < secondSmallest)
    {   
        secondSmallest = numbers[i];
    }

}
console.log(`${smallest} is the smallest number`);
console.log(`${secondSmallest} is the second smallest number`);