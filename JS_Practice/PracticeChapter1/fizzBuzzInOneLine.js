let maxNumber = undefined;
let fizzBuzzSingleLinePrintFormat = ""; 
let spaceCharacter = " ";

if (maxNumber <= 0 || !(Number.isInteger(maxNumber)))
{
    console.log("Invalid Number");
}
else 
{
for (let i = 1; i <= maxNumber; i++)
{
    if (i % 3 === 0 && i % 5 === 0)
    {
        // console.log("FizzBuzz");
        fizzBuzzSingleLinePrintFormat = fizzBuzzSingleLinePrintFormat + "FizzBuzz" + spaceCharacter;

    } else if (i % 3 === 0)
    {
        // console.log("Fizz");
        fizzBuzzSingleLinePrintFormat = fizzBuzzSingleLinePrintFormat + "Fizz" + spaceCharacter;
    } else if (i % 5 === 0)
    {
        // console.log("Buzz");
        fizzBuzzSingleLinePrintFormat = fizzBuzzSingleLinePrintFormat + "Buzz" + spaceCharacter;
    } else 
    {
        // console.log(i);
        fizzBuzzSingleLinePrintFormat = fizzBuzzSingleLinePrintFormat + i + spaceCharacter;
    }

}
    console.log(fizzBuzzSingleLinePrintFormat);
}

