const str = "This is my name i.e. Siva Reddy";
let strLowerCase = str.toLowerCase(); 
let aCount = 0;
let eCount = 0;
let iCount = 0;
let oCount = 0;
let uCount = 0;
let consCount = 0;
let totalVowels = 0;
for(let i = 1; i <= strLowerCase.length; i++)
{
    switch(strLowerCase[i]) 
    {
        case 'a': 
            aCount++;
            break;
        case 'e':
            eCount++;
            break;
        case 'i':
            iCount++;
            break;
        case 'o':
            oCount++;
            break;
        case 'u':
            uCount++;
            break;
        case ' ':
            break;
        case '.' :
            break;
        default : consCount++;
            break;

    }
}
console.log(`Vowel a count : ${aCount}`);
console.log(`Vowel e count : ${eCount}`);
console.log(`Vowel i count : ${iCount}`);
console.log(`Vowel o count : ${oCount}`);
console.log(`Vowel u count : ${uCount}`);
console.log("Total Vowels count: " + (aCount +eCount+iCount+oCount+uCount));

console.log(`Consonents count : ${consCount}`);