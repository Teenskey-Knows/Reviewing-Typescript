// Named function

function add(num1:number,num2: number): number{
    return num1 + num2;
}

// Arrow Functions

const subtaract = (num1:number,num2:number):number =>{
return num2 - num1
}


// Also do not forget about these functions

/**
 
function Monday() {
  exerciseRoutine(liftWeights);
}

function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}


 */


// FIRST CLASS FUNCTIONS


/**
 Functions in JavaScript are first-class objects, which means they can be treated like any other object: they can be assigned to a variable, passed as values to other functions, returned as the value from another function, etc.
 */



 // INLINE FUNCTIONS


 /**
  

exerciseRoutine(function () {
  console.log("Stretch! Work that core!");
});





function () { console.log("Stretch! Work that core!"); }: This is an anonymous function definition. It's a function without a name, defined inline. When exerciseRoutine is called, this function will be executed.



Here's why this pattern is useful:

Abstraction: By passing a function as an argument to exerciseRoutine, you can abstract the specific actions related to the exercise routine. This means you can define different routines by simply passing different functions to exerciseRoutine.

Flexibility: The ability to pass functions as arguments provides flexibility. You can change the behavior of exerciseRoutine without modifying its code. You can even pass different functions based on certain conditions or user preferences.

Encapsulation: The exerciseRoutine function encapsulates the logic related to managing exercise routines. It keeps the code organized and modular.

Reusability: Since you can pass any function to exerciseRoutine, you can reuse both the exerciseRoutine function and the functions you pass to it in various parts of your codebase.

Callback Pattern: This pattern is commonly known as the callback pattern. It's extensively used in asynchronous JavaScript to handle events, perform operations after certain tasks are completed, and more.




  */


// RETURNING FUNCTIONS

/*

Functions can also return other functions. This is useful when we want to package up a function and its environment, but don't want to call it just yet.

For example, let's say our morning routine involves drinking a cup of coffee, exercising immediately, and then at some point later (depending on how we feel), eating breakfast. What we'll have for breakfast depends on what kind of exercise we're doing.




function morningRoutine(exercise) {
  let breakfast;

  if (exercise === liftWeights) {
    breakfast = "protein bar";
  } else if (exercise === swimFortyLaps) {
    breakfast = "kale smoothie";
  } else {
    breakfast = "granola";
  }

  exerciseRoutine(exercise);

  // we could give this function a name if we wanted to, but since
  // it's only available _inside_ morningRoutine(), we don't need to

  
  return function () {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`);
  };
}





*/