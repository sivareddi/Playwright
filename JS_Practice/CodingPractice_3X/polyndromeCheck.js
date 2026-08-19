let str = "MalayalaM A MalayalaM";
let reversed = "";
for(let i = 1; i <= str.length; i++)
{
    reversed = reversed + str[str.length-i]; 
}
console.log(reversed);
if(str === reversed)
{
    console.log(`${str} is A Polindrome`);
} 
else
{
    console.log(`${str} is NOT a Polindrome`);
}
