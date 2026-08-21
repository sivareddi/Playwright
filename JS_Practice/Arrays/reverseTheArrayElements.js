const arr = ["Apple", "Orange", 4, true];
let reverseArr = [];
for (let i = 1; i <= arr.length; i++)
{
    reverseArr.push(arr[arr.length-i]);
}
console.log(reverseArr);