interface User2 {
    name:string;
    id?:number;
    email:string;
}

//Object Destructuring 

//Normally we would access the object like this:
// user.name
//user.email

// But when we destructure we can now access all the attributes at once as shown below:

// After the let part you can name the *-> name attribute with an alias like userName & email with userLogin
let {name:userName, email:userLogin}: User = {name:"Martin Kamau",id:1,email:"kamaumartin026@gmail.com"}

//We can now access the email attribute directly as userLogin

userLogin;