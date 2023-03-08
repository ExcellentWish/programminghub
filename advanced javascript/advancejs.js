// Let’s write a function localFunction and declare a variable localVar inside it.

function localFunction() {
    var localVar = 50; //Here, localVar is a variable whose scope is limited to the function localFunction.
    console.log(localVar);
    document.write(localVar);
}

localFunction();

var globalVar = 5;

function globalFunction() {
    //Here, globalVar is a variable whose scope is accessed thoughout the program.
    console.log(globalVar);
    document.write("<br>");
    document.write(globalVar);
}

globalFunction();

function someFunction() {

    var a = 6;
    console.log(a);
}
document.write("<br>");
someFunction();
document.write("<br>");
var newStr = "Hey! I am a string.";
document.write("<br>");
document.write(newStr);
document.write("<br>");
// Finding the length of the string.  we use the built in length property.

var newStr1 = "HeyString";

var strLength = newStr1.length;

document.write(strLength);

// Joining two strings concat() method is used.  string1.concat(string2);
document.write("<br>");
var conCatStr = newStr.concat(newStr1);

document.write(conCatStr);
document.write("<br>");
//Finding a substring

// substr() method is used to extract a substring from a string.
// It takes two parameters,
// stringName.substr(starting index of substring, length of the substring);

var myString = "I am in love with Strings";
document.write(myString);
myString.substr(5, 7);

document.write(myString.substr(5, 7));

// Converting string to uppercase and lowercase
//toUpperCase() method is used to convert a string to uppercase.
// toLowerCase() method is used to convert a string to lowercase.


document.write("<br>");
var myString = "Don't mess with my case.";

myString.toUpperCase();

document.write(myString.toUpperCase());
document.write("<br>");
document.write(myString.toLowerCase());

// Rounding off the numbers toFixed() method comes to rescue
// variable _name.toFixed(number_of_decimal_places);

var randomFloat = 5.66543;

randomFloat.toFixed(2)

var fixRandom = randomFloat.toFixed(2); // changed to 6. toFixed(1) = 5.7. and toFixed(2) = 5.67
document.write("<br>");
document.write(fixRandom);


// Converting a number into a string

// This can be done using toString() method.
document.write("<br>");
var myNum = 456;

var newNumToStr = myNum.toString();

document.write(newNumToStr); // 456 = "456"

// Writing numbers up to a precision
// toPrecision() method also returns a rounded off number. it takes the total number of digits as the argument
document.write("<br>");
var precisionNum = 5.4756

var precisionNum1 = precisionNum.toPrecision(4);

document.write(precisionNum1);

// boolean? True or false
// Booleans are used in making decisions.
var myBool = true;
var newBool = false;
document.write("<br>");

var myNum = 54.4634;
document.write(myNum.toPrecision(3));


/* 
In JavaScript, all the numbers are categorized into only one data type which is number.
toFixed() is used to round off the numbers to the fixed number of decimal places.
toString() is used to convert a number to a string.
toPrecision() is used to round off a number to a fixed number of digits.
A variable which can take either true or false as values is known as a boolean.
Boolean variables are useful in controlling the flow of a program.

*/
document.write("<br>");
document.write("<br>");
document.write("<br>");
// key: value and objects
document.write("Here is a student key");
document.write("<br>");
// let key = { name: "Rahul"}

var Students = {
    name: "Rahual",
    class: 10,
    roll_No: 45,
    grade: "A+",
}

document.write(Students);

// Using the new keyword
// var Students = new object();

Students.name = "Rahual";


// <-- This will create an object with new keyword -->
/*var Student = new object();
// <-- This will access the 1st item of object and assign string value -->
Student.name = "Rahul";
// <-- This will access the 2nd item of object and assign integer value -->
Student.class = 10;
// <-- This will access the 3rd item of object and assign integer value -->
Student.roll_no = 45;

// Using object constructor
// Object constructor is a function which has the same name as the object.

// function Student(name, {class}, roll_no){
    // This will assign the userdefined values to items
//     this.name = name;
// 	this.class = class;
// 	this.roll_no = roll_no;
// }
// This will create an object and sending values in the argument to constructor 

var Student1 = new Student("John", 11, 46);

//this refers to the current object.

Student.name = "Rajat";
// Will add a property house with value Green to the object.

Student.house = "Green";

Student['name']; // Will also return the same result as Student.name.

// And, writing Student[‘name’] = “Rajat”; will assign a new value to the property name of object Student.

*/
var Car = {
	// <-- First item -->
	model: "Fiat ABC",
	// <--   second item -->
	year: 1997
};

console.log(Car.model)

console.log(Car['year'])

// To Summarize
/* 
An object is a collection of properties and methods.
These properties are written in the form of key-value pairs.
There are three ways to define an object: Using an object literal, using the new keyword and using object constructor.
There are two ways to access properties of the object using a dot operator and using bracket notation.
*/