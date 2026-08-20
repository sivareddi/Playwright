let str = "123!@#$ 123";
let reverseString = "";
if(str.length <= 0)
{
    console.log("Invalid string");
}
else
{
    
    for(let i = 1; i <= str.length; i++)
    {
        reverseString = reverseString + str[str.length-i];
    }

}
console.log(reverseString);