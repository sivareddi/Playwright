
let str = "Malayalam cin";
let reverseStr = "";
if (str.length === 0)
{
    console.log("NO");
 }
for (let i = 0; i <= str.length-1; i++)
{
    reverseStr = reverseStr + str[str.length-i];
}
if (str === reverseStr) {
    console.log("YES");
}
else 
{ 
    console.log("NO");
}