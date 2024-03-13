// Example. Create a random decimal number between 0 and 100.
var random1 = Math.random() * 100;
console.log(random1);

// Example. Create a random integer between 0 and 100 (not including)
//var random2 = Math.random() * 100;
//random2 = Math.floor(random2);
//c; //onsole.log(random2);

// Example. Create a random number between -5 and 5
// Range is (5- (-5)) = 10
// Low # is 5
//v//ar random3 = Math.random() * 10 + -5;
//random3 = Math.floor(random3);
//console.log(random3);

//// Example. Create a Delivery application that prompts the user for the length, width, and height of a package, and then
//displays “Reject” if any dimension is greater than 10, and “Accept” if all the dimensions are less than or
// equal to 10
//var length = +prompt("Length?");
//var width = +prompt("Width?");
//var height = +prompt("Height?");

// check if any dimension is bigger tham 10, reject if so
//if (length > 10 || width > 10 || height > 10) {
//alert("Reject");
//} else {
//alert("Accept");
//}
// Example. Create a Valid Grade application that asks the user to enter a final grade for an English class. Output "Grade Submitted" if it is between 0 and 100 and "Grades must be between 0 and 100" otherwise.
//var grade = +prompt("Grade?");

//if ((grade >= 0) & (grade <= 100)) {
//alert("Grade submitted");
//} else {
//alert("Invalid grade");
//}

// Warm Up
// Write a program that asks the user to enter a single digit number.
/// Check their answer for correctness using:
// a. AND (&&) logical operator
// b. OR (||) logical operator

var userNum = parseInt(prompt("Enter a single digit number."));

if (userNum >= 0 && userNum <= 9) {
  alert("Thanks!");
} else {
  alert("Remember single digit numbers only!");
}
if (userNum < 0 || userNum > 9) {
  alert("Not a single digit number");
}
