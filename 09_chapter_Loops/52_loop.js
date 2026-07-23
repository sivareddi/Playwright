/*
ICU - Loop Anatomy
I - Initialization (runs once at the start)
C - Condition (checked before each iteration)
U - Update (executes at the end of each iteration)
*/

// ========== FOR LOOP ==========
// Use when you know the exact number of iterations
console.log("FOR LOOP FROM HERE:");
let i = 0;
for (i = 0; i < 10; i++)  // I=0, C=i<10, U=i++
{
    console.log(i);          // prints 0 to 9
}

// ========== DO...WHILE LOOP ==========
// Use when the block must execute at least once regardless of condition
console.log("DO WHILE FROM HERE:");
let a = 1;
do {
    console.log(a);          // prints 1 to 9
    a++;                     // increment after each iteration
} while (a < 10);            // condition checked at the end
console.log("value of a is: ", a);  // a is now 10, loop exited

// ========== WHILE LOOP ==========
// Use when you only know the stop condition, not the count
console.log("While Loop FROM HERE:");
let b = 1;
while (b < 10)               // condition checked at the start
{
    console.log("value of a is: ", b);  // prints 1 to 9
    b++;                     // increment to avoid infinite loop
}