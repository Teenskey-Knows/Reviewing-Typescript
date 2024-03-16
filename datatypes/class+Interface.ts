interface Address{
    street: string;
    city: string;
    state:string;
    pin:string;
}


class Employee3 {
    #id: number;

    protected name:string;

    address:Address;

    constructor( id:number,name:string, address: Address){
        this.address = address;
        this.#id = id;
        this.name = name;
    }
}

let john3 = new Employee3(1,"John",{street:"Magunas",city:"Nairobi",state:"Kenya",pin:"123"});
