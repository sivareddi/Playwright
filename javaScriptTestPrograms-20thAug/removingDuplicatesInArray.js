const dupArrayNumbers = [ 7, 2, 3, 3, 5, 1, 6, 7, 3 ];
  let uniqueArr = [];
  for (let i = 0; i < dupArrayNumbers.length; i++)
  {
    if(uniqueArr.indexOf(dupArrayNumbers[i]) === -1)
    {
        uniqueArr.push(dupArrayNumbers[i]);
    }
  }
  console.log(uniqueArr);