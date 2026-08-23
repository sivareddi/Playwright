const arr = [12, 14, 24, 53, 13, 22];
function dupArray(arr1)
{
    let arrDuplicate = [];
    for (item of arr1)
    {
        arrDuplicate.push(item);
    }
    return arrDuplicate;
}
console.log(dupArray(arr));