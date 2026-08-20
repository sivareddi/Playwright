//Taking input from Console (Terminal) as an arguement 
const n = process.argv[2];

if(n%2 === 0)
{
    console.log(`${n} is an EVEN number`);
}
else
{
    console.log(`${n} is an ODD number`);
}