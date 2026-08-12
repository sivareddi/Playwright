const users = ["Admin", "Manager", "Guest"];

for(let i=0; i< users.length; i++)
{
    console.log(users[i]);
}

users[1] = "Supervisor";

for(let i=0; i< users.length; i++)
{
    console.log(users[i]);
}
