let strS = "malayalam1";

console.log(strS.split(''));
console.log(strS.split('').reverse());
console.log(strS.split('').reverse().join(''));
let reversed = strS.split('').reverse().join('');
console.log(reversed);

if(strS === strS.split('').reverse().join(''))
{
    console.log("Palindrome");
}
else
{
    console.log("Not a Palindrome");
}