let str = "malayalam";
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
if (str === reverseString)
{
    console.log(`${str} is a POLINDROME`);
}
else
{
        console.log(`${str} is NOT A POLINDROME`);
}
