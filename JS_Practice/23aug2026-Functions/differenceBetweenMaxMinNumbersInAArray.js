// const arrayNumbers = [12, 1, 45, 2, 6, 9, 99];
const arrayNumbers = [12];
let maxvalue = arrayNumbers[0];
let minValue = arrayNumbers[0];

function differenceBetweenMaxAndMinNumbersInAnArray(arr)
{
    if(arr.length < 2)
    {
        return "Need two numbers to find difference";
    }
    for(let i = 0; i <= arr.length-1; i++)
    {
        if(arr[i] < minValue)
        {
            minValue = arr[i];
        } else if (arr[i] > maxvalue)
        {
            maxvalue = arr[i];
        }

    }
    return maxvalue - minValue;
}

let difference = differenceBetweenMaxAndMinNumbersInAnArray(arrayNumbers);

console.log(difference);
console.log(`${maxvalue} is bigger & ${minValue} is smaller`);