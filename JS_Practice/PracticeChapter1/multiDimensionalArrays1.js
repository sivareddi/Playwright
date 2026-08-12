let grid = [[1, 2, 3], ["4", "5", "6", "0"], ["7", "8", "9"]] ;
//console.log(grid);

// for (let i = 0 ; i < 3; i++)
// { 
//     for(let j = 0; j < grid[i].length; j++)
//     {
//         process.stdout.write(grid[i][j] + " ");        

//     }
//     console.log("");
// }

for (let row of grid)
{ 
    for(let cell of row)
    {
        process.stdout.write(cell + " ");        

    }
    console.log("");
}
