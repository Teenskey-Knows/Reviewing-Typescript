interface Admin{
    name:string;
    email:string;
    id:number;
}

let admins: Admin[] = [
    {
        name:"admin.mkamau",
        email:"mkamau@equitybank.co.ke",
        id:1
    },
    {
        name:"admin.dennis",
        email:"denis@equitybank.co.ke",
        id:2
    },
    {
        name:"admin.imaila",
        email:"imaila@equitybank.co.ke",
        id:3
    }
]

let [admin1,admin2,...restAdmins]:Admin[] =  [
    {
        name:"admin.mkamau",
        email:"mkamau@equitybank.co.ke",
        id:1
    },
    {
        name:"admin.dennis",
        email:"denis@equitybank.co.ke",
        id:2
    },
    {
        name:"admin.imaila",
        email:"imaila@equitybank.co.ke",
        id:3
    }
]

//How to access them

console.log(admin1);

//When using ...restAdmins you can still access them as such

console.log(restAdmins);

