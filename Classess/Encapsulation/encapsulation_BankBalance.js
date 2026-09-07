class ICICI {
    #balance;

    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;
    }
    getBalance()
    {
        return this.#balance;
    }
    setBlaance(balance, isCashier)
    {
        if(isCashier)
        {
            this.#balance = balance;
        } else {
            console.log("Not allowed");
        }

    }

}
let siva = new ICICI("Siva", 10000 );
console.log(siva.getBalance());