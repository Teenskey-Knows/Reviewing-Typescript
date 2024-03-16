interface User{
    name:string;
    age?:number; //By having a ? makes age optional in interfaces
    id:number;
    email:string;
}


// You can extend interfaces and Implement them

// Extending

interface Employee5 extends User {
    salary: number;
}


let employee: Employee5 = {
    name: "John", id: 2, email: "kamaumartin26@gmail.com", salary: 1000,
};


// Interfaces with Method Definition

interface Login{

    login():User; //This is method definition that should return attributes with User interface
}

// How to implement the above interface.

// A class is the only way you can use to implement the above interface

class SignUp implements Login {


    login():User{
        return {  name: "John", id: 2, email: "kamaumartin26@gmail.com"}
    }
}


