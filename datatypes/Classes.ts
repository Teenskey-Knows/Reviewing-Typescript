class Employee {
    id!:number;

    name!:string;

    address!:string;
}

let john = new Employee();

john.id = 1;
john.name = "John";
john.address = "Highway 71";

/*

Employee {id:1,name:'John', address:'Highway 71'}

*/

// In typescript you can either have i). Default Constructors or ii). Paramiterized Constructors but not both.

class EmployeeOfTheYear {

    name: string;
    id: number;
    age:number;

    constructor(name:string,id:number,age:number){
        this.name = name;
        this.id = id;
        this.age = age;
    }

}

let num1Employee = new EmployeeOfTheYear("Martin Kamau", 2,26);

console.log(num1Employee);

// EmployeeOfTheYear {name: "Martin Kamau", id: 2, age: 26}


// Class Methods


class AnotherEmployee {
    id:number;
    name:string;
    address:string;

    constructor(id:number,name:string,address:string){
        this.id = id;
        this.name = name;
        this.address = address;
    }

    //Class Methods

    getNameWithAddress(): string{
        return this.name  + '' +  this.address;
    }
}

let anotherEmployee = new AnotherEmployee(2,"Martin Kamau", "Kahawa Wendani");

console.log(anotherEmployee);

console.log(anotherEmployee.getNameWithAddress());

