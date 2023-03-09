// Let’s write a function localFunction and declare a variable localVar inside it.

function localFunction() {
    var localVar = 50; //Here, localVar is a variable whose scope is limited to the function localFunction.
    console.log(localVar);
    document.write(localVar);
}
br();

function br(){
    document.write("<br>");
}

localFunction();
br();
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

someFunction();
br();
var newStr = "Hey! I am a string.";
br();
document.write(newStr);
br();
// Finding the length of the string.  we use the built in length property.

var newStr1 = "HeyString";

var strLength = newStr1.length;

document.write(strLength);

// Joining two strings concat() method is used.  string1.concat(string2);
br();
var conCatStr = newStr.concat(newStr1);

document.write(conCatStr);
br();
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


br();
var myString = "Don't mess with my case.";

myString.toUpperCase();

document.write(myString.toUpperCase());
br();
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
br();
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

//The date object
// This will create a instance of the Date object
var myDate = new Date();
var dayMonth = new Date().getDate();
var month = new Date().getMonth() + 1; // in an index


document.write("<br>");
document.write("<p>Below is myDate var. it should it should display date and time </p>");
document.write("<br>");
document.write(myDate);

/*
To get all these information, use the following methods:
getDate() - Returns the current day of the month. A number between 1 and 31.
getDay() - Returns the current day of the week. A number between 0 and 6.
getTime() - Returns the number of milliseconds elapsed since January 1, 1970 which is nothing but the current time.
getFullYear() - Returns the current year.
getMonth() - Returns the current month of the year.
Similarly, getMinutes(), getHours(), getSeconds() are some other methods present in the date object.
*/

br();

document.write(dayMonth);




br();

document.write(month + " month");
br();
// This will create a instance of the Date object
var myDate = new Date();
//  This will Call the required method   using the dot operator
myDate.getFullYear();

document.write(myDate.getFullYear());

/*
To summarize
The JavaScript date object contains methods and properties related to date and time.
JavaScript stores dates as number of milliseconds passed since the Unix time.
To use the methods and properties of the date object, we first create an instance of it using the new keyword.
 var myDate = new Date();
There are many methods which we can use to get the date, time, year, month, etc.
Similarly, we can also set the above things using the various set methods.
*/


// What is a DOM? or Document Object Model
/*
Starting from your forefather’s generation, then your grandfather’s generation, then your parents and then you.
Similarly, browser also creates a tree, but this tree consists of HTML elements, attributes, values, content and more.
It is a tree structure of objects created by the browser
This tree consists of elements, attributes, values, content, basically everything that we have written in HTML.
HTML DOM outlines a standard using which we can add, delete, get or change the elements of HTML

Consider a basic HTML webpage with the following markup.
 <html>
	<head>
	</head>
	<body>
		<p>
		</p>
	</body>
</html>
DOM looks like

            Document
            Html
        head    body
                h1
                p

The outer nodes are the parent nodes and the enclosed ones are the children nodes.
<html> is at the root, then <head> and <body> are its children
<p> becomes the child of <body>

here are three identifiers by which these nodes can be identified.
Tag name - The name of the tag
Class - The classes attached to the nodes/elements.
Id - The id assigned to the nodes/elements.

There are certain methods which can be used to access the elements via the above identifiers.
getElementsByTagName() - To find the elements using the tag name.
getElementsByClassName() - To find the elements using the class assigned to the element.
getElementById() - To find the element using the id assigned to it.
*/

document.getElementsByTagName('p'); //This will select all the tags containing the p tag
document.getElementsByClassName('newClass'); // This will select all the elements containing the class newClass
document.getElementById('newId'); // We can access the <p> tag with the id that is assigned to it which is newId. This will select the element containing the id - newId.

/* 
To summarize

DOM stands for Document Object Model.
DOM is a tree structure of objects created by the browser.
DOM enables us to manipulate the content or the HTML using JavaScript.
We can access the elements by their name, by the classes attached to them or by the id assigned to them using getElementsByName(), getElementsByClassName() and getElementById() respectively.

*/

//Accessing HTML elements
/* 
Accessing HTML Elements by CSS Selectors
CSS selectors are used to select the elements you want to style which can be id, class names, types, attributes, values of attributes, etc
We have two methods that can be used to access HTML elements based on the specified CSS selectors.
querySelector()  method returns only first element that matches with the specified selector
querySelectorAll()returns all the matching elements.
*/
document.querySelector(".className");	//to access using class
document.querySelector("#idName");	//to access using id
document.querySelector("tagname");	//to access using tag name

// To summarize

/*
We can access HTML content using JavaScript.
To do so, the document object provides these methods.
getElementsByTagName() - It returns all the elements with the tag name specified as a parameter.
getElementsByClassName() - It returns all the elements with the class name specified as a parameter.
getElementById() - It returns the elements with the Id specified as a parameter.
querySelector() - It returns the first element that matches the specified CSS selector.
querySelectorAll() - It returns all the elements that matches the specified CSS selector. 
*/

//Manipulating  HTML elements

// JavaScript provides innerHTML property which can be used to set the contents of HTML.

document.getElementById("lone-p").innerHTML = "Here is some text for you! From .innerHTML";

document.getElementById("not-alone").innerHTML = "“Replaced you!”";

document.getElementById("bold-me").innerHTML = "<b>Just like this</b>";
br();

/*
Creating new elements
Let us explore how to create new elements using JavaScript..
To do so, we use the method createElement() of the document object.
Doesn’t that sound obvious!?
 document.createElement("p");
*/ 

//This will create a new element and store it in a variable 
var newEl = document.createElement("p");
// This will Create some text for new element and store it in a variable 
var someText = document.createTextNode("Some Text Here! This is to append child"); //createTextNode() method is used to create a new text node.
//This will insert text into newly created p element and store it in a variable
var insertThis = newEl.appendChild(someText);
//This will insert the p element inside the present div 
document.getElementById("meDiv").appendChild(insertThis)

// br(); document.write("<br>")


// Remove an element. We wish to remove the p element present inside the div. To do so we have a method removeChild().
// This will access the division with specific ID name
var divEl = document.getElementById("thisDiv");
//This will access the paragraph element
var pEl = document.getElementById("thisP");
// This will remove paragraph element from division
divEl.removeChild(pEl);

// Setting an attribute

/* 
Attributes provide additional information about the element.
We can set the values of attributes present in the elements using JavaScript.
This can be achieved using the setAttribute() method

 setAttribute(“attribute”,”value”);
*/

var aEl = document.querySelector("a");

aEl.setAttribute("href","http://google.com");

// To remove any attribute we use the method removeAttribute().

document.querySelector("#stack").removeAttribute("href");


// The removeAttribute() method takes only the name of the attribute as an argument.

// To summarize
/* 
innerHTML property can be used to set the contents of HTML.
We can write HTML tags inside the value we pass to the innerHTML property.
createElement() is used to create new elements.
createTextNode() method is used to create a new text node.
appendChild() method is used to append elements to another element
setAttribute() method is used to set the value of attributes and removeAttribute() is used to remove the present attributes.
*/


// Manipulating  CSS

/* 
We can add any CSS or change the existing CSS of any element.
To do so we use the style property of the element.

el.style.CSSProperty = value;

Where el is the element, style is the property of the element, CSSProperty is the property to be manipulated and value is the value of that property.

change the font-size of the text in the p tag
*/

var el = document.querySelector("p");

el.style.fontSize = "20px";

el.style.color = "black";

// turn invisible
// el.style.display = "none";

el.style.background = "red";

//On similar lines, we can change the margin, padding, border, change alignment,etc

/* 
To Summarize
We can add any CSS or change the existing CSS of any element using JavaScript.

To do so, we use the style property of the element.
The syntax of style is
 el.style.CSSProperty = value;
 Where el is the element, CSSProperty is the property to be manipulated and value is the value of that property.

 We can change the margin, padding, border, alignment, color, background-color, etc. Basically, everything that we can do using CSS, can be done by using JavaScript.
*/


// What are Events? An event is an occurence.
/*
Event can either occur by action of the user or by the action of the browser itself.
Clicking a button, hovering over, resizing the browser window, pressing a key on the keyboard are events done by the user.
Whereas, loading of the web page, resizing the browser window is an event that happens to the browser. 
*/

// Types of Events
/* 
onclick() - This event is fired when any HTML element is clicked.
onload() - This event is fired when the browser finishes loading the web page.
onkeydown() - This event occurs when any key on the keyboard is pressed.
onmouseout() - This event occurs when the pointer is moved out of any element.
onmouseover() - This event occurs when the pointer moves over any element.
*/

function clicked(){
	alert('Oh! Clicked. and a function called this'); 
}

/*
But there’s another way which allows us to attach events to the HTML elements instead of writing it directly inside the HTML element.
This is done using the addEventListener() function.
*/
// This will access the button element
var myBtn = document.querySelector('.myBtn')

myBtn.addEventListener('click',function(){
	alert("Oh! Clicked. with addEventListener");
});
//The addEventListener() function takes two parameters - the type of event and the function.

// To remove an event attached to any HTML element, we use the function removeEventListener().
// also takes two arguments, the event to remove and the function to perform when the event is removed.
var myOtherBtn = document.querySelector(".myOtherBtn");
myOtherBtn.removeEventListener('click', alert);

/*
To summarize

An event is an occurence.
Clicking a button, hovering over an element, loading of the web page, resizing the browser window, are few examples of an event.
We can write the events inline or use the addEventListener() function to add one.
Similarly, we can use removeEventListener() function to remove an attached event.

*/

// What is BOM? BOM stands for Browser Object Model.

/*
The Browser Object Model enables JavaScript to interact with the browser.
The Browser object model consists of an object known as window.
The window object represents the browser window, every object is a child of the window object.

                        Window
        Document        object      Screen

Even the document object is a child of the window object.
Other than the document object, the window object also consists of many other objects.
The screen object which contains the information about the user’s screen.
The history object which contains the browser’s history.
The location object which gives us access to the URL.
The navigator object which gives us the details about visitor’s browser
The window object stores the information about the window size of the user’s browser.
We can find out the height and width of the browser window.
To do so, we use the innerHeight and innerWidth properties of the window object.

window.innerHeight returns the innerHeight of the browser window.
window.innerWidth returns the innerWidth of the browser window.

The screen object
The screen object contains the information about the user’s screen.
To access the screen object we can write:
 window.screen or screen
 The screen object can be written without the window, just like the document object.

We can get the height, width, color depth, pixel depth and many more things using the screen object.
To find out the height and width of the screen we can simply use
screen.height and screen.width respectively.

Remember, screen.height is similar to window.screen.height.

The History object
The history object gives us access to the history of the browser which is pretty interesting to play with.

The history object provides two methods - back() and forward().
Writing history.back() is same as pressing the back button of the browser.
history.forward() will take the navigation forward onto the next screen.

Writing history.back() is same as writing window.history.back().

The location object
Using the location object we can get details about the URL, hostname, protocol

window.location.href - It returns the URL of the current page.
window.location.hostname - It returns the domain name of the website.
window.location.protocol - It returns the protocol of the website.

The Navigator object
This object is used to detect the browser’s information such as appName, appVersion etc.
appName - returns the name
appVersion-returns the version
cookieEnabled-returns true if cookie is enabled else returns false
online - returns true if browser is online else returns false.

*/

/*
To summarize
BOM stands for Browser Object Model.
The Browser Object Model enables JavaScript to interact with the browser.
The window object represents the browser window, every object is a child of the window object.
The screen object contains the information about the user’s screen.
The history object contains the browser’s history. 
The location object gives us access to the url.
*/

// What are cookies?
/*
Cookies in JavaScript enables us to store data in the user’s browser. Cookie is a piece of data that is stored in the user’s browser.
Like remembering your username for a particular website, so when you visit the same website again, you don’t need to type it again.
Or storing session variables - This is used for maintaining a login session among different pages. 
JavaScript can read, create, modify and delete cookies.
To create a cookie following syntax is used:

*/
document.cookie = "key=value;";

// We cannot create multiple cookies at once with document.cookie. To write multiple cookies
document.cookie = "key1=value1";
document.cookie = "key2=value2";
// We need to write as many key-value pairs as required by using document.cookie repeatedly.

/* 
    Deleting a cookie
By default, the cookie is deleted when the browser is closed.
But we can also specify the expiry time manually.
*/

document.cookie = "key:value; expires:Date";
// The expires takes Date as a value.
// Read the cookies
//Writing document.cookie returns the cookies which are already present.
var myCook = document.cookie;

// The above will store a string containing all the information about cookies in the variable myCook which will be in the same key-value format

/*
Change the cookie in JavaScript 
*/
document.cookie = "username=Rahul Saxena; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

// We can also delete the existing cookies. To do so, we need to simply write a past date in the expires field.

document.cookie = "key=;expires= Past_date;";

// Where key is the name of the cookie which is to be deleted. There is no need to specify the value while deleting a cookie.

/* 
        To Summarize
Cookies in JavaScript enable us to store data in the user’s browser.
Cookie is a piece of data that is stored in the user’s browser.
Cookie is a small piece of data which consists of a name and value pair stored on the browser.
We can create a cookie using following syntax
 document.cookie = “key=value”;

 We can delete a cookie by assigning the value of a past date in the expires field.
*/


//  ESE6.  ECMA is a standard organization for information and communication systems

// Before ES6, variables were declared using var. Variables declared using var are function scoped. In ES6, we can declare variables using let and const.

// let is same as the var, except it is block scoped, unlike var.

/* 
When we learnt about scope we saw that a variable declared inside a function using var isn’t available outside the function.
But, a variable declared inside a block scope using var is still available outside the block.
For example:
 for(var count=0; count<5; count++) 
 {//some action }
 console.log(count);
*/

let variable_name = "val";
// let is the keyword , variable_name can be any valid variable name and value is the variable value.

const const_name = "value";
// const is the keyword, const_name can be any valid variable name and value is the constant value .

// It is advised to avoid the use of var and use block scoped let and const.

/* 
Remember how we write functions in JavaScript?
 <-- This defines a function -->
function nameOfFunction(){
	<-- This is function body -->
}

ES6 Function

The arrow function is written as
 <-- This defines an Arrow function using Fat arrow-->
 (parameters) => {
	<-- This is function body -->
}

Which is same as writing
 <-- This defines a function with Parameters -->
 function (Parameters){
	<-- This is function body -->
}

We can also ignore the use of curly braces if the function body is confined to one statement.
 (parameters) => statement; 

 Further, we can assign the function to a variable, so the function reference will be stored in that variable.
 let varName = (parameters) => {
	<-- This is function body -->
};
*/

let varName = (parameters) => {
	//<-- This is function body -->
};

// Template strings. Large strings and variable concatenation?

/*
To write template strings we use backticks ( ` `) instead of single or double quotes.
 let str = `Hey! String me.`; 
*/

let str = `Hey! String me.`;

/*
Let’s see one more example:
 <-- Declares a variable and assign an integer value -->
let a = 5;
<-- Declares another variable and assign a template   string value -->
let str1 = `I am ${a} years old.`; 
*/

let a = 5;

let str1 = `I am ${a} years old.`; 

document.write(str1);

// To Summarize
/*
ECMA is a standard organization for information and communication systems.
ECMAScript is nothing but the other name of JavaScript.
The 6th major release of ECMAScript is known as es6 and it came out in 2015.
In ES6, we can declare variables using let and const.
To write template strings we use backticks ``.
*/

// What is a Class? Classes in JavaScript are more or less special type of functions. Classes are variables and methods bunched together.
/*
Methods are nothing but the functions declared inside a class.
The members in the class can be accessed by creating the instance of the class.
These instances of the class are nothing but the objects.
When an object is created from a class it is known as an instance of the class.
*/

class className {
    // this is class body
};

// And, the second way to do this is using the class expression.

var varName1 = class{
    // class body
};

// The class expressions can be named or unnamed.

var varName2 = class className{
	//This is class body -->  
};

/* 
Constructor method is a special method in a class.
There can only be one constructor method in a class.
*/

// class Student{
//     // This defines a constructor for the class 
//     constructor(name, roll_no){
//         // This initialises the variables 
//         this.name = name;
//         this.roll_no = roll_no;
//     }
//     showName(){
//         // This is a method to return name
//         return  name;
//     }
//     showRoll(){
//         // This is a method to return roll_no
//         return roll_no;
//     }
// };

/* 
The members of the class can be accessed by creating the instance of the class.
Objects are used to access and assign values to the variables.
It is done using the new keyword.
*/
let objName = new className();
// The new keyword instantiates the object for use.
// ClassName() is the name of the constructor of the class.

class Student{
	// <-- This defines a constructor for the class -->
	constructor(name, roll_no){
		// <-- This initialises the variables -->
		this.name = name;
		this.roll_no = roll_no;
			}

	// <--   This defines a method of the class -->
	showName(){	
			// <-- This is a method to return name -->
			return   name;
	}
	// <-- This defines another method of the class -->
	showRoll(){
		// <-- This is a method to return roll_no   -->
		return roll_no;
	}
}

// <-- This creates an instance of defined class with parameters -->
let student1 = new Student("Rahul",45);

// Now we can call the function showName() and showRoll()

student1.showName();
student1.showRoll();

/*
To Summarize
Classes in JavaScript are more or less special type of functions.
Classes are variables and methods bunched together.
Methods are nothing but the functions declared inside a class.
The members in the class can be accessed by creating the instance of the class.
Constructor is used for creating and initializing the object created with class.
*/