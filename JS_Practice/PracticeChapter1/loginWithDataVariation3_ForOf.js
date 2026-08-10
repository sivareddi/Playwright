let users = [
    { username: "admin", password: "admin123" },
    { username: "", password: "tester123" },
    { username: "manager", password: "" },
    { username: "developer", password: "developer123" }
];

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
            console.log();
            continue;

        } 

        executeLogin(currentUser.username, currentUser.password);  
        
    }