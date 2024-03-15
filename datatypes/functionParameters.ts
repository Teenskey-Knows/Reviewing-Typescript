//FUNCTION PARAMETERS INCLUDE:

//1. OPTIONAL PARAMETERS

function add(num1:number,num2:number,num3?:number):number{

    return num3?  num1 + num2 + num3: num1 + num2;
}

// - In the above function, adding a ? at the end of a parameter shows that it is optional & to avoid errors it should always come at the end.

// - Look at how the function is returned when a parameter should be optional



//2. REQUIRED PARAMETERS

const subtract =function (num1:number,num2:number=6,num3:number=3):number { return num1 - num2 - num3}

//3. REST PARAMETERS

function add2(num1:number,num2:number,...num3:number[]):number{
    return num1 + num2 + num3.reduce((a,b)=>a+b,0)
}

let numbers = [1,2,3,5,6,7,8];

console.log(add2(2,3,...numbers)); //or
console.log(add2(3,5,...[5,6,7]));// or
console.log(add2(2,4,5,6,8,9,0,43));


// GENERIC FUNCTIONS

function getItems<T>(items: T[]): T[]{
    return new Array<T>().concat(items)
}

//T can be anything Type - it is just a place holder

let concatResult = getItems([1,2,3,4,6,7,7]);

let concatStrings = getItems(["a","b","c","d","e","f"]);

//T can also be any value

let numberArray = getItems<number>([1,2,4,5,6,7,8,9,0])

 
