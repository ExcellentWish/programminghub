document.write("hello world"); // this will write to a html
console.log("hello world");
/* to display console log in terminal- node javascript/js.js 
Important to note running this in terminal will cause errors because of document write*/


var x = "Programming Hub"
document.write("<br>");
document.write(x);
// Using var and not let as I am changing variables for each section

var JS_Rocks = true; // boolean
var JS_Rocks = "true"; // not a boolean

var age = 22;

/* 
Addition = +
Subtraction = -
multiplcation = *
Division = /
Modulus (division remainder) = %
  */
document.write("<br>");
var x = 2;
var y = 2;
var z = x + y;

document.write(" var z = x + y; = " + z);

document.write("<br>");
var z = x - y;
document.write(" var z = x - y; = " + z);
document.write("<br>");
var z = x / y;
document.write(" var z = x / y; = " + z);
document.write("<br>");
var z = x % y;
document.write(" var z = x % y; = " + z);
document.write("<br>");

/* increasing value or increment
 var pizza = 1;
pizza = pizza + 1; a bad way to do it 

 pizza++  a better way

 decrement 
 var onion = 1;
 onion = onion - 1;

onion--; */

// // Decrement x, increment y and print both of them.
var x = 2 ;
var y = 3 ;
x--;
y++;
document.write("<br>");
document.write("var x = 2 ; var y = 3 ;");
document.write("<br>");
document.write(" x--; " + x );
document.write("<br>");
document.write("y++; " + y);

/* 
Greater than
x>y

Less than
x<y

Greater than or equal to
x>=y

Less than or equal to
x<=y

Equal to
x = 300
y = 300
x==y ? x is equl to y

= used to declare valuables
== used to check the equality of the two values.

Not Equal to
x = 150
y = 50

x != y ? x is not equal to y
*/
// Deep into comparisons Find a phone with 10 mp camera or more and 16gb of memory or more.
/* 
 mp >= 10 and gb >= 16 .. and in programming = && 
 mp >= 10 &&  gb >= 16
 what about or ?
 mp >= 10 or gb >= 16 .. or in programming = || 
 mp >= 10 ||  gb >= 16
 */

var mp = 10;
var gb = 16;

// Conditional Statements
/* 
If else
if(conditions){
  do a task if true
} else {
 if it is false to this task
}
*/

/* 
    REMEBMER 
Greater than
x > y
Less than
x < y
Equality
x == y
Inequality
x != y

*/
// Select appropriate options to print "x isn’t greater than y"
document.write("<br>");
document.write("<p>var x =23; <br>var y = 43;<br>if(x>y){<br> document.write('x is greater than y')<br>}<br>else{<br>document.write('x isn’t greater than y')<br>}<br> print answer <br> = ");

var x =23;
var y = 43;

if(x>y){
    document.write("x is greater than y")
}
else{
	document.write("x isn't greater than y")
}

// lists Arrays

var wish1= "Swim in the world's largest swimming pool";
var wish2 = "Do skydiving";
// etc

/*Array is a special variable which lets us store multiple values in a single variable. Starting at 0 then 1 ,2,3,4,5. This array size is 6*/
document.write("<br>");
var y =  7;
var arr_items = [y, wish1, wish2]; // invalid array Crux: An array can only hold variables of the same type.
document.write(arr_items);

document.write("<br>");
//  the items in the arrays are assigned a particular number depending on the order of the item they’ve been added
document.write(arr_items[0]);
document.write("<br>");
document.write(arr_items[1]);
document.write("<br>");
document.write(arr_items[2]);
document.write("<br>");

// Create an array with names of students from a class.
 var students = ["Ashley", "John", "Tim", "Mac", "Wesley"];
 //                0         1       2      3       4 
 document.write("<br>");
 document.write(students[0]);
 document.write("<br>");
 console.log(students[1]);
 document.write(students[2]);
 document.write("<br>");
 console.log(students[3]);
 document.write(students[4]);
 document.write("<br>");
 document.write("<br>");

 //repeat stuff in programming.

 //Looping is basically repeating a sequence of instructions until a condition is satisfied.

 var x = "I love javascript"
 var y = 1;

 for(var i = 0; i < 10; i++){
    document.write(x + " " + y++);
    document.write("<br>");
 }

 /* 
 Let’s consider the previous example and try printing “I love JavaScript”, ten times.
We’ll start by creating a variable.
 var i ;
Followed by writing a for loop in the following way:
 for(i = 1 ; i <= 10 ; i ++)
The point to note here is,
Initial value, condition and counter statement are separated by semicolons (“;”).

*/
document.write("<br>");
document.write("Below is a do while loop");
document.write("<br>");
document.write("<br>");
var q = 1;
var t = 1;
do{
    document.write(x + " " + t++); 
    document.write("<br>");
    q = q + 1;
    
} while (q <= 10);


// showcase important messages Dialog box



/* 
There are three types of dialog boxes in JavaScript.
These dialog boxes can be used to either show confirmation messages, pop up an error or show warning messages.

Alert Dialog Box
Prompt Dialog Box
Confirm Dialog Box

*/

window.alert("Some alert messages Ok");
alert("Some alert message without window.alert()");

window.prompt("A prompt message box. Just put in ok ");
prompt("without window.prompt()")
window.confirm("A confirm box");
confirm("A confirm box without window.confirm()");

document.write("<br>");
document.write("<br>");
document.write("<br>");
// functions
/*
We start defining the function by using the function keyword followed by the name of the function which is then followed by open and close round brackets.
Once we’re done with it, we write the reusable code inside the curly brackets. 
*/

function print() {
	document.write("I know javascript this was done with a function");
}
print();
document.write("<br>");

/*
Parameters are passed while calling the functions and later those passed parameter can be manipulated inside the functions. 
*/
function addtionCode(num1 ,num2){
    document.write("<br>");
    var result = num1 + num2;
    
    document.write(result)
    
}
document.write("Below is addtionCode(5,6) function");
document.write("<br>");
addtionCode(5,6);