
function isPalindrome(str) {
    return str === str.split('').reverse().join(''); 
}
let strS = "MalayalaM";
let palindrome = isPalindrome(strS);
if(palindrome === true)
{
    console.log(`${strS} is a palindrome`);
}
else
{
    console.log(`${strS} is not a palindrome`);
}
