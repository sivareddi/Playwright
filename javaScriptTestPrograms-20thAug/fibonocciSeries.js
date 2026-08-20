const factCount = 10;
let factNumber0 = 0;
let factNumber1 = 1;
let factNumber;
process.stdout.write("0 1");
for(let i = 1; i <= factCount-2; i++)
{
    factNumber = factNumber0 + factNumber1;
    factNumber0 = factNumber1;
    factNumber1 = factNumber;
    process.stdout.write(" " + factNumber);
}