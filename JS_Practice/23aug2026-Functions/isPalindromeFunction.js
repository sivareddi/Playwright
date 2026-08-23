const str = "malayalam";

function isPalindrome(str)
{
    return str === str.split('').reverse().join('');
}

let value = isPalindrome(str);

if(value)
{
    console.log("palindrome");
}
else
{
    console.log("Not a palindrome");
}
