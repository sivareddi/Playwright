let users = [
    { username: "admin", password: "admin123" },
    { username: "manager", password: "manager123" },
    { username: "tester", password: "tester123" },
    { username: "developer" }
];
// if the password is not provided for a user, then it will print undefined for passowrd
for(let index = 0; index < users.length; index++)
{
    console.log("Logging in with "+ users[index].username + " password " + users[index].password);
}