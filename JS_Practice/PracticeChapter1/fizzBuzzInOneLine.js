let maxNumber = 30;
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

    if (i === 1)
    {
        spaceCharacter = "";
    }
    else 
    {
        spaceCharacter = " ";
    }
    if (i % 3 === 0 && i % 5 === 0)
    {
        // console.log("FizzBuzz");
        fizzBuzzSingleLinePrintFormat = fizzBuzzSingleLinePrintFormat + spaceCharacter + "FizzBuzz" ;

    } else if (i % 3 === 0)
    {
        // console.log("Fizz");
        fizzBuzzSingleLinePrintFormat = fizzBuzzSingleLinePrintFormat  + spaceCharacter +  "Fizz" ;
    } else if (i % 5 === 0)
    {
        // console.log("Buzz");
        fizzBuzzSingleLinePrintFormat = fizzBuzzSingleLinePrintFormat + spaceCharacter +  "Buzz" ;
    } else 
    {
        fizzBuzzSingleLinePrintFormat = fizzBuzzSingleLinePrintFormat + spaceCharacter + i;
    }

}
    console.log(fizzBuzzSingleLinePrintFormat);
}

