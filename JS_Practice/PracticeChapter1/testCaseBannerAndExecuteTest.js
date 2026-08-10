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
printBanner("Login Test");
executeLogin("admin");
printBanner("Search Test");
executeLogin("tester");