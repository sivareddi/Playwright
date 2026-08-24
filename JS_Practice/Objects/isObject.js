
// Checking whether the type is object or not.
let obj = [12, 43, 12, 66];
let x = 10;

if(typeof obj === 'object' && obj !== null)
{
    console.log(`Type of "arr" is an object`);
}

if(typeof x === 'object' && x !== null)
{
    console.log(`Type of x is an object`);
}
else
{
    console.log(`Type of x is NOT an OBJECT`);
}