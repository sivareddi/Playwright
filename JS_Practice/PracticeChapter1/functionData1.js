let users = [
    { username: "admin", password: "admin123" },
    { username: "tester", password: "tester123" },
    { username: "manager", password: "manager123" }
];

function executeLogin(username, password)
{
 
        console.log("Logging in as " + username);
        console.log("Password provided: " + password);
        console.log("Login execution completed");
        console.log();
}

for (let index = 0; index < users.length; index++)
    {
        const currentUser = users[index];
        executeLogin(currentUser.username, currentUser.password);
    }