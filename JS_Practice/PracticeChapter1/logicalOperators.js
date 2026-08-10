const loggedIn = true;
const isAdmin = false;
console.log(loggedIn && isAdmin); // false (both must be true)
console.log(loggedIn || isAdmin); // true (at least one is true)
console.log(!loggedIn); // false (negation)
console.log(!isAdmin); // true (negation)

// PlayWright example

const actualTitle = "Dashboard";
const expectedTitle = "Dashboard";
console.log(actualTitle === expectedTitle); // true (both value and type are the same)

