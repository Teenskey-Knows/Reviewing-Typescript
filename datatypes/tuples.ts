// We can use tuples to swap two numbers

// Example

// Below is a tuple
let swapNumbs: [firstNumber: number,secondNumber: number];

function swapNumbers(num1,num2):[number,number]{

    return [num2,num1]
}

swapNumbs = swapNumbers(20,30);

console.log(swapNumbs[0]);
console.log(swapNumbs[1]);
//console.log(swapNumbs[2]);
//Tuple type '[firstNumber: number, secondNumber: number]' of length '2' has no element at index '2'.ts(2493)

