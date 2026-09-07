class Browser{

    constructor(name)
    {
        this.name = name;
        this.isOpen = true;
        console.log(name + " launched");
    }
    startBrowser()
    {
        console.log("Starting the browser");
    }
}