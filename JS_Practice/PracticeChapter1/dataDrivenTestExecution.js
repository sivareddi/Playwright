
let testScenarios = [
    { testName: "Login Test", username: "admin" },
    { testName: "Search Test", username: "tester" },
    { testName: "Profile Test", username: "manager" }
];


function printBanner(testName)
{
    console.log("====================================");
    console.log("Executing Test : " + testName);
    console.log("====================================");
}

function executeLogin(username)
{
    console.log("Logging in as " + username);
    console.log();
}


for (let index = 0; index < testScenarios.length; index++)
{
    const currentInstance = testScenarios[index];
    printBanner(currentInstance.testName);
    executeLogin(currentInstance.username);
}


// printBanner("Login Test");
// executeLogin("admin");
// printBanner("Search Test");
// executeLogin("tester");