class person
{
    name;
    age;
    height;
    weight;

    walk()
    {
        console.log(`${person.name} can walk`);
    }
    
    talk()
    {
        console.log(`${person.name} can talk as well`);
    }

}

personObj = new person();
personObj.name = "John";
personObj.age = 45;
personObj.height = "5.9 inches";
personObj.weight = "62 Kgs"

console.log(personObj);
console.log(personObj.walk());
console.log(personObj.talk());