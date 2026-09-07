class TestCase{
    constructor(name, status, priority)
    {
        this.name = name;
        this.status = status;
        this.priority = priority;

    }
    display()
    {
        console.log(this.name + "->" + this.status + "->" + this.priority );
    }
}
let loginTest_ref = new TestCase("Login Test", "PASS", "P0");
let singupTest_ref = new TestCase("Signup Test", "FAIL", "P1");

loginTest_ref.display();
singupTest_ref.display();