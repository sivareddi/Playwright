let maxNumber = 50;
let divisorNumber = 7;
let counter = 0;
for (let i = 1; i <=  maxNumber; i++)
{
    if (i % divisorNumber === 0)
    {
        counter++;
        console.log(i);
    }

}
 console.log("Total Numbers Found = " + counter);