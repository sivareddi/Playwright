let users = [
    { username: "admin", password: "admin123" },
    { username: "", password: "tester123" },
    { username: "manager", password: "" },
    { username: "developer", password: "developer123" }
];
let loginAttemptCount = 0;
let skippedUserCount = 0; 

function executeLogin(username, password)
    {
 
        console.log("Logging in as " + username);
        console.log("Password provided: " + password);
        console.log("Login execution completed");
        console.log();
        
    }

for (const currentUser of users)
    {
        if(currentUser.username === "" || currentUser.password === "")
        {
            console.log("Invalid user data. Login skipped.");
            skippedUserCount++;
            console.log();
            continue;

        } 

        executeLogin(currentUser.username, currentUser.password);  
        loginAttemptCount++;

    }

    console.log("Total Login Attempts = " + loginAttemptCount);
    console.log("Total Skipped Users = " + skippedUserCount);