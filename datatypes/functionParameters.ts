//FUNCTION PARAMETERS INCLUDE:

//1. OPTIONAL PARAMETERS

function add(num1:number,num2:number,num3?:number):number{

    return num3?  num1 + num2 + num3: num1 + num2;
}

// - In the above function, adding a ? at the end of a parameter shows that it is optional & to avoid errors it should always come at the end.

// - Look at how the function is returned when a parameter should be optional
//2. REQUIRED PARAMETERS
//3. REST PARAMETERS

