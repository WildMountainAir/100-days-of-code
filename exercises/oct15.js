// Add two numbers together
// 11 + 4
// Add two strings together
// `22` + `4`
// Multiply two numbers
// 3 * 3
// Multiphy two strings
// '9' * '9'
// Divide a number by a string
// 12 / "6"
//Add a string to two numbers
// 15 + 3 + "number"
// Unexpected results can happen
// ("b" + "a" + + + "a") + "a"
// var myFirstName
// var myLastName = 'Cordova'
// // console.log(myFirstName)
// // console.log(myLastName)
// myFirstName = "Alison"
// var myLastName = "Sipos"
// var myMiddleName = "Joyce"
// // console.log(myFirstName)
// // console.log(myLastName)
// // console.log(myLastName)
// var myFullName = myFirstName + " " + myMiddleName + " " + myLastName
// myFullName
// // console.log(myFullName)
// var animal = "monkey"
// var monkey = "animal"
// var x = 15
// var y = 10
// var _var = "huh?"
// var _true = false
// // % module or what is the remainder
// var isTenEven = 10 % 2 === 0
// Before you run the code, try to reason about what the value of x is supposed to be on the last line. Once you have arrived at a conclusion that you are comfortable with, check your answer.
// var x = 5;
// x + 10;
// x; // => ???
// var x = 17;
// x = (x + 1) / 2;
// x * 4;
// x; // => ???
// var x = 5;
// var y = 20;
// x = y;
// y = y + 7;
// x; // => ???
// var x = 10;
// var y = 5;
// x = (x * 4) - 3;
// x + 17;
// x = x + y;
// x; // => ???
//If you are trying to change the value of a variable you need to be sure to use an assignment aka the equal sign operator like x = (x * 4) - 3
// Order of operations: what will the output of the following expression be? 
// ( 36 * 2 + 8 - 2 ) / 2
// The number 9 is greater than the number 9.
// 9 > 9
// The number 9 is great than or equal to the number 9. 
// 9 >= 9
// The string of "9" is greater than the number 8
// "9" > 8
// The number 13 loosely equals the string "13"
// 13 == "13"
// the number 0 loosely equals the boolean false
// 0 == false
// The number 13 strictly equals the string "13"
// 13 === "13"
// The string "hola" strictly equals the string "Hola"
// "hola" === "Hola"
// var x = 10;

// if ( x > 5 ) { console.log("x is greater than 5")
// } 
// if ( x < 5 ) { console.log ("x is less than 5")
// } 
// else { console.log ("x is equal to 5")
// };

// Write a function called multiple that takes two parameters (both numbers) and returns the product of those two numbers.
// function add ( a, b ) { 
//   return a + b
//   };
// add ( 2, 3 );
// var multiply = function( a, b ) {
//   var product = a*b;
//   return product;
// };
// multiply( 4, 4 );

// Write a function called fullName that takes 3 parameters, all strings, a first name, a middle name and a last name, and returns a full name with spaces in the correct place
// function fullName (firstName, middleName, lastName) {
//   return firstName + " " + middleName + " " + lastName
// };
// fullName();

// Write a function called greeting that takes a name and returns a personalized greeting.
// function greeting (firstName) {
// return "Why hello there, " + firstName + ".";
// };
// greeting("Jeff");

// Write a function called calculateTip that takes a total and a decimal between 0 and 1 and returns a string message showing the amount of tip owed.
// ex input: 25, .2
// ex output: "The tip amount you owe is $5"
// hint: don't forget the dollar sign!
function calculateTip ( total, percentage ) {
    let tipAmount = total * percentage
    return "The tip amount you owe is $" + tipAmount.toFixed(2)
  }
  calculateTip( 50, .15 );
  //things I need: total & percentage
  
  
  
  
  
  
  
  
  // Today I learned about types, variables, operators and functions in JavaScript at a @GalvanizeBLDR #LearntoCode tonight!
  
  // // It was
  // ("b" + "a" + + + "a") + "a" + "s";
  
  https://github.com/bentleybuilds/workShop/tree/master/javascript101