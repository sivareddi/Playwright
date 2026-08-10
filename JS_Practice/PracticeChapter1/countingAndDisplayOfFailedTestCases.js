let testCases = [
    { testName: "Login Test", status: "Passed" },
    { testName: "Logout Test", status: "Failed" },
    { testName: "Search Test", status: "Passed" },
    { testName: "Payment Test", status: "Failed" },
    { testName: "Profile Test", status: "Passed" }
];

let failedTestcaseCounter = 0;
let testCaseStatus = "Failed";

for (let index = 0; index < testCases.length; index++)
{
    if (testCases[index].status === testCaseStatus)
    {
        failedTestcaseCounter++;
        console.log("Failed Test: " + testCases[index].testName);
    }
}
console.log("Total Failed Tests = " + failedTestcaseCounter);
