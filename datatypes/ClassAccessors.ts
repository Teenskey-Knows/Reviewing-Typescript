// We have the following Accessors in classes:
// 1. Private - so for private you can just use # symbol to denote that it is private which is the native javascript way.


// 2. Protected
// Protected is useful once we want to extend a particular class. 
//The protected keyword used before a class attribute restricts access to that attribute. 
// It allows access from within the class itself and from any subclasses, but not from outside the class  or its subclasses.
// Slowly go through the code you will understand

// 3. Public - by default all variables are public and you don't have to mention that.

class EmployeeOfTheYear2 {
    #id: number; // this denotes that it is private
    name: string;
    age:number;

    constructor(name:string,id:number,age:number){
        this.name = name;
        this.#id = id; // And this is how we label it.
        this.age = age;
    }

}

let num1Employee2 = new EmployeeOfTheYear("Martin Kamau", 2,26);

console.log(num1Employee);

// EmployeeOfTheYear {name: "Martin Kamau", id: 2, age: 26}


// Class Methods


class AnotherEmployee2 {
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

let anotherEmployee2 = new AnotherEmployee(2,"Martin Kamau", "Kahawa Wendani");

console.log(anotherEmployee);

console.log(anotherEmployee.getNameWithAddress());

