"use strict";
/************************************************************************************************************** */
/*******************************chapters # 01  Alerts  ******************************************/
/************************************************************************************************************** */

//Assignment# 01: Write a script to greet your website visitor using JS alert box.

alert("Welcome to My Website");

//Assignment# 02: Write a script to display following message on your web page:

alert(
  "Javacript Alert" +
    "\n" +
    "\n" +
    "\n" +
    "Error! Please Enter  a valid Password."
);

//Assignment# 03: Write a script to display following message on your web page: (Hint : Use line break)

alert(
  "Javacript Alert" +
    "\n" +
    "\n" +
    "\n" +
    `Welcomed to JS land \n Happy codding!`
);

//Assignment# 04: Write a script to display following messages in sequence:

alert("Javacript Alert" + "\n" + "\n" + `Welcomed to JS land`);

alert("Javacript Alert" + "\n" + "\n" + `Happy Coding!`);

//Assignment# 05: Generate the following message through browser’s developer console:

alert(
  "Javacript Alert" +
    "\n" +
    "\n" +
    `Hello... I can run Js through my web browser's console.`
);

/************************************************************************************************************** */
/*******************************chapters # 02  VARIABLES FOR STRINGS  ******************************************/
/************************************************************************************************************** */

//Assignment# 01: Declare a variable called username.

var username;

//Aasignment# 02: Declare a variable called myName & assign to it a string that represents your Full Name.

var myName = "Muhammad waqas moin";

/*Assignment# 03: Write script to
a) Declare a JS variable, titled message.
b) Assign “Hello World” to variable message
c) Display the message in alert box.
*/

var message;
message = "Hello World";
alert(message);

//Assignment# 04: Write a script to save student’s bio data in JS variables and show the data in alert boxes.

var student_name = "Hamza";
var student_age = "20";
var student_studies = "Web development programming";
alert(student_name);
alert(`${student_age} years old`);
alert(student_studies);

//Assignment# 05 : Write a script to display the following alert using one JS variable.

var food = "PIZZA";
alert(
  food +
    "\n" +
    food[0] +
    food[1] +
    food[2] +
    food[3] +
    "\n" +
    food[0] +
    food[1] +
    food[2] +
    "\n" +
    food[0] +
    food[1] +
    "\n" +
    food[0]
);

/*Assignment# 06: Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com).
Show the blow mentioned message in an alert box.(Hint: use string concatenation)
*/

var my_email = "example@gmail.com";
alert("My Email is " + my_email);

//Assignment# 07: Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

var book = "A smarter way to learn JavaScript";
alert(`I am tring to learn from book ${book}`);

//Assignemnt# 08: Write a script to display this in browser through JS

console.log("Yah! I can Write HTML Content Through Javascript.");

//Assignment# 09: Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

var desing_string = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(desing_string);

/************************************************************************************************************** */
/*******************************chapters # 03  VARIABLES FOR NUMBERS *******************************************/
/************************************************************************************************************** */

//Assignment# 01: Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = 29;
alert(`I am ${age} years old.`);

/*Assignment# 02: Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You have visited this site N times”.
*/

var visitor_on_site = 14;
alert(`You have visited this site ${visitor_on_site} times.`);

//Assignemnt# 03:Declare a variable called birthYear & assign to it your birth year.

var my_birth_year = 1992;
console.log(`My birth year is: ${my_birth_year}
Data type of my declered Variable is: ${typeof my_birth_year}`);

/*
Assignment# 04: A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to order
Show the following message in your browser: “John
Doe ordered 5 T-shirt(s) on XYZ Clothing store”
*/

var visitor_name = "Muhammad waqas moin";
var product_title = "T-shirt";
var order_quantity = 5;
console.log(
  `${visitor_name} ordered ${order_quantity} ${product_title}(s) on XYZ Clothing store.`
);

/************************************************************************************************************** */
/*******************************chapters # 04  VARIABLE NAMES: LEGAL & ILLEGAL **********************************/
/************************************************************************************************************** */

//Assignment$ 01: Declare 3 variables in one statement.

var var_1, var_2, var_3;

//Assignment# 02:. Declare 5 legal & 5 illegal variable names.

//legals
var name, some_names, $someName, _, someName_123, $some_Name123, _123someName;

//illegal
// var 123test, @some_names, test@, some illegalName, some-illegalName; // remove commment before runs

/*
Assignment# 03: Display this in your browser
a) A heading stating “Rules for naming JS variables”
b) Variable names can only contain ______, ______,______ and ______.
For example $my_1stVariable
c) Variables must begin with a ______, ______ or_____. For example $name, _name or name
d) Variable names are case _________
e) Variable names should not be JS _________
 */

console.log("A heading stating Rules for naming JS variables");
console.log(
  `Variable names can only contain Numbers,dollar sign($),underscore(_),letters. For example $my_1stVariable`
);
console.log(
  ` Variables must begin with a letter, $ or _. For example $name, _name or name`
);
console.log(` Variable names are case sensitive`);
console.log("Variable names should not be JS keyword");

/************************************************************************************************************** */
/*******************************chapters # 5  MATH EXPRESSIONS **************************************************/
/************************************************************************************************************** */

// Assginment #01:  Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var firstNumber = 3;
var secondNumber = 5;
var addition = firstNumber + secondNumber;
console.log(`The Sum of ${firstNumber} and ${secondNumber} is: ${addition}`);

// Assginment #02: Repeat task1 for subtraction, multiplication, division & modulus.

var number_one = 3;
var number_two = 5;
var subtraction = number_one - number_two;
var multiplication = number_one * number_two;
var division = number_one / number_two;
var modulus = number_two % number_one;
console.log(
  `The subtraction of ${number_one} and ${number_two} is: ${subtraction}`
);
console.log(
  `The multiplication of ${number_one} and ${number_two} is: ${multiplication}`
);
console.log(`The division of ${number_one} and ${number_two} is: ${division}`);
console.log(`The modulus of ${number_one} and ${number_two} is: ${modulus}`);

// Assignment #03: Do the following using JS Mathematic Expressions
//a. Declare a variable.
var myVariable;

//b. Show the value of variable in your browser like “Value after variable declaration is: ??”
console.log(`Value after variable declaration is:${myVariable}`);

//c. Initialize the variable with some number.
myVariable = 5;

//d. Show the value of variable in your browser like “Initial value: 5”.
console.log(`Initail value: ${myVariable}`);

//e. Increment the variable.
myVariable++;

//f. Show the value of variable in your browser like “Value after increment is: 6”.
console.log(`Value after increment is: ${myVariable}`);

//g. Add 7 to the variable.
myVariable += 7;
//h. Show the value of variable in your browser like “Value after addition is: 13”.
console.log(`Value after addition  is: ${myVariable}`);

//i. Decrement the variable.
myVariable--;

//j. Show the value of variable in your browser like “Value after decrement is: 12”.
console.log(`Value after decrement is: ${myVariable}`);

// k. Show the remainder after dividing the variable’s value by 3.
var myRemaindar = myVariable % 3;

// l. Output : “The remainder is : 0”.
console.log(`The remainder is : ${myRemaindar}`);

// Assignment #04 :. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.

var movie_Ticket_Cost = 600;
var numberOfTickets = 5;
console.log(
  `Total Cost of ${numberOfTickets} tickets toa movie is: ${
    movie_Ticket_Cost * numberOfTickets
  }`
);

// Assignment #05: Write a script to display multiplication table of any number in your browser.

var table = 4;
var staringPoint = 1;
console.log("Table of", table);
console.log(`${table} X ${staringPoint} = ${table * staringPoint}`);
console.log(`${table} X ${++staringPoint} = ${table * staringPoint}`);
console.log(`${table} X ${++staringPoint} = ${table * staringPoint}`);
console.log(`${table} X ${++staringPoint} = ${table * staringPoint}`);
console.log(`${table} X ${++staringPoint} = ${table * staringPoint}`);
console.log(`${table} X ${++staringPoint} = ${table * staringPoint}`);
console.log(`${table} X ${++staringPoint} = ${table * staringPoint}`);
console.log(`${table} X ${++staringPoint} = ${table * staringPoint}`);
console.log(`${table} X ${++staringPoint} = ${table * staringPoint}`);
console.log(`${table} X ${++staringPoint} = ${table * staringPoint}`);

//Assignment #06: The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formula: °C = (°F-32)* 5/9 or °F = (°C * 9/5) + 32

var temperature_C = 25;
var temperature_F = 70;
var Fahrenheit = temperature_C * (9 / 5) + 32;
var Celsius = (temperature_F - 32) * (5 / 9);
console.log(`${temperature_C}°C is: ${Fahrenheit}°F`);
console.log(`${temperature_F}°F is: ${Celsius}°C`);

//Assignment #07: Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables:
//a. Price of item 1
//b. Price of item 2
// c. Ordered quantity of item 1
//d. Ordered Quantity of item 2
//e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var item_one_price = 650;
var item_one_quantity = 3;
var item_two_price = 100;
var item_two_quantity = 7;
var shipping_charge = 100;
console.log("Shopping Card");
console.log(`Price of Item 1 is :${item_one_price}.
Quantity of item 1 is :${item_one_quantity}.
Price of Item 2 is: ${item_two_price}
Quantity of item 2 is: ${item_two_quantity}.
Shipping charge: ${shipping_charge}
Total Cost of the order is: ${
  item_one_price * item_one_quantity +
  item_two_price * item_two_quantity +
  shipping_charge
}`);

//Assignment #08: Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser.

var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks / totalMarks) * 100;
console.log(`Percentage :${percentage}`);

//Assignment #09: Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

var us_dollar = 10;
var saudiRiyal = 25;
var total_pak_currancy = us_dollar * 104.8 + saudiRiyal * 28;
console.log("Currancy in PKR");
console.log(`Total currancy in PKR : ${total_pak_currancy}`);

//Assignment #10:. Write a program to initialize a variable with some number and do arithmetic in following sequence:
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//Perform all calculations in a single expression

var my_number = 7;
my_number = ((my_number + 5) * 10) / 2;

// Assignment #11: The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.

var currentYear = new Date().getFullYear();
var birthYear_one = 1992;
var birthYear_two = 1990;
var age1 = currentYear - birthYear_one;
var age2 = currentYear - birthYear_two;
console.log(`They are either ${age1} or ${age2} years old.`);

//Assignment #12: The Geometrizer: Calculate properties of a circle.
//a. Store a radius into a variable.
//b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
//Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = 20;
const π = 3.142;
var circumference = 2 * π * radius;
var area = π * radius ** 2;
console.log(`The Radius of the Circle: ${radius}`);
console.log(`The circumference is:${circumference}`);
console.log(`The area is: ${area}`);

/*
// Assignment #13:The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?
Wonder no more.
a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number).
e. Calculate how many would you eat total for the rest of your life.
Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”
*/

var my_favorite_snack = "Potato Chips";
var myAge = 15;
var myMaximumAge = 65;
var maximumAmountPerDay = 3;
console.log(`Favorite Snake: ${my_favorite_snack}`);
console.log(`Currant Age: ${myAge}`);
console.log(`Estimated Maxinmum Age: ${myMaximumAge}`);
console.log(`Amount of Snake per day: ${maximumAmountPerDay}`);
console.log(
  `You will need ${
    myMaximumAge - myAge
  } ${my_favorite_snack} to last you until the ripe old age of ${
    (myMaximumAge - myAge) * maximumAmountPerDay
  }`
);

/************************************************************************************************************** */
/*******************************chapters # 6-8 MATH EXPRESSIONS  ***********************************************/
/************************************************************************************************************** */

//Assignment # 01:Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser.

var a = 10;
console.log(`result:

Value of a is: ${a}
----------------------`);
++a;
console.log(`Value of ++a is: ${a}
Now the Value of a: ${a}`);

console.log(`Value of a++ is: ${a++}
Now the Value of a: ${a}`);

console.log(`Value of a++ is: ${--a}
Now the Value of a: ${a}`);

console.log(`Value of a++ is: ${a--}
Now the Value of a: ${a}`);

/*
2. What will be the output in variables a, b & result after execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;
*/

var a = 2,
  b = 1;
var my_result = --a - --b + ++b + b--; //  1 - 0 + 1 + 1 after --a , a= 1, b =0 and result should be = 3
console.log(`a: ${a}
b: ${b}
result: ${my_result}`);

// //Assignment# 03: Write a program that takes input a name from user & greet the user.

var xyz = prompt("Name Please.");
if (xyz) {
  console.log(`Welcome ${xyz}`);
}

/*
Assignement# 04 & 05: Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
*/

var tble = +prompt("Which Table you want to display?");
if (tble) {
  var staringPoint = 1;
  console.log("Table of", tble);
  console.log(`${tble} X ${staringPoint} = ${tble * staringPoint}`);
  console.log(`${tble} X ${++staringPoint} = ${tble * staringPoint}`);
  console.log(`${tble} X ${++staringPoint} = ${tble * staringPoint}`);
  console.log(`${tble} X ${++staringPoint} = ${tble * staringPoint}`);
  console.log(`${tble} X ${++staringPoint} = ${tble * staringPoint}`);
  console.log(`${tble} X ${++staringPoint} = ${tble * staringPoint}`);
  console.log(`${tble} X ${++staringPoint} = ${tble * staringPoint}`);
  console.log(`${tble} X ${++staringPoint} = ${tble * staringPoint}`);
  console.log(`${tble} X ${++staringPoint} = ${tble * staringPoint}`);
  console.log(`${tble} X ${++staringPoint} = ${tble * staringPoint}`);
} else {
  var table = 5;
  var staringPoint = 1;
  console.log("Table of", table);
  console.log(`${table} X ${staringPoint} = ${table * staringPoint}`);
  console.log(`${table} X ${++staringPoint} = ${table * staringPoint}`);
  console.log(`${table} X ${++staringPoint} = ${table * staringPoint}`);
  console.log(`${table} X ${++staringPoint} = ${table * staringPoint}`);
  console.log(`${table} X ${++staringPoint} = ${table * staringPoint}`);
  console.log(`${table} X ${++staringPoint} = ${table * staringPoint}`);
  console.log(`${table} X ${++staringPoint} = ${table * staringPoint}`);
  console.log(`${table} X ${++staringPoint} = ${table * staringPoint}`);
  console.log(`${table} X ${++staringPoint} = ${table * staringPoint}`);
  console.log(`${table} X ${++staringPoint} = ${table * staringPoint}`);
}

/*
Assignment# 06: Take
a) Take three subjects name from user and store them in 3 different variables.
b) Total marks for each subject is 100, store it in another variable.
c) Take obtained marks for first subject from user and stored it in different variable.
d) Take obtained marks for remaining 2 subjects from user and store them in variables.
e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table).
*/

var subject_1,
  subject_2,
  subject_3,
  obtained_mark_Subject_1,
  obtained_mark_Subject_2,
  obtained_mark_Subject_3,
  parcentage_subject_1,
  parcentage_subject_2,
  parcentage_subject_3;
var total_marks = 100;
subject_1 = prompt("First subject?");
subject_2 = prompt("Second subject?");
subject_3 = prompt("Third subject?");
if (subject_1 && subject_2 && subject_3) {
  obtained_mark_Subject_1 = +prompt(
    `Enter obtained mark of subject: ${subject_1}.`
  );
  obtained_mark_Subject_2 = +prompt(
    `Enter obtained mark of subject: ${subject_2}.`
  );
  obtained_mark_Subject_3 = +prompt(
    `Enter obtained mark of subject: ${subject_3}.`
  );
  if (
    obtained_mark_Subject_1 &&
    obtained_mark_Subject_2 &&
    obtained_mark_Subject_3
  ) {
    parcentage_subject_1 = (obtained_mark_Subject_1 / total_marks) * 100;
    parcentage_subject_2 = (obtained_mark_Subject_2 / total_marks) * 100;
    parcentage_subject_3 = (obtained_mark_Subject_3 / total_marks) * 100;
    console.log(
      parcentage_subject_1,
      parcentage_subject_2,
      parcentage_subject_3
    );
    document.write(
      `<table border="1"><tr><th>Subjects</th><th>TotalMark</th><th>ObtainedMarks</th><th>Percentage</th></tr>
      <tr><td>${subject_1}</td><td>${total_marks}</td><td>${obtained_mark_Subject_1}</td><td>${parcentage_subject_1}%</td></tr>
      <tr><td>${subject_2}</td><td>${total_marks}</td><td>${obtained_mark_Subject_2}</td><td>${parcentage_subject_2}%</td></tr>
      <tr><td>${subject_3}</td><td>${total_marks}</td><td>${obtained_mark_Subject_3}</td><td>${parcentage_subject_3}%</td></tr>
      <tr><td></td><td>${total_marks * 3}</td><td>${
        obtained_mark_Subject_1 +
        obtained_mark_Subject_2 +
        obtained_mark_Subject_3
      }</td><td>${
        (parcentage_subject_1 + parcentage_subject_2 + parcentage_subject_3) / 3
      }%</td></tr>
      </table>`
    );
  }
}

/************************************************************************************************************** */
/*******************************chapters # 9-11  USER INPUT & CONDITIONAL STATEMENT *****************************/
/************************************************************************************************************** */

//Assignment# 01: Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”.

var cityName = prompt("Enter City name.");
if (cityName == "karachi" || cityName == "Karachi") {
  console.log("Welcome to city of lights.");
}

//Assignment# 02: Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

var gender = prompt("Male/Female ?");
if (gender === "male" || gender === "Male") {
  console.log("Good Morning Sir.");
} else if (gender === "female" || gender === "Female") {
  console.log("Good Morning Ma’am.");
}

// Assignment#03: Write a program to take input color of road traffic signal from the user & show the message according to this table:
//Red => Must Stop
//Yellow => ready to go
//Green =>Move Now

var myColor = prompt("Color?");
if (myColor === "Red" || myColor === "red") {
  console.log("Must Stop");
} else if (myColor === "yellow" || myColor === "Yellow") {
  console.log("Ready To Go");
} else if (myColor === "green" || myColor === "Green") {
  console.log("Move Now");
} else {
  console.log("Enter value between red,yellow or green");
}

// Assignment # 04: Write a program to take input remaining fuel in car (inlitres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

let remaining_fuel = +prompt("fual in a car?");
if (remaining_fuel && remaining_fuel < 0.25) {
  console.log("Please refill the fuel in your car");
}

//Assignment# 05: Run this script, & check whether alert message would be or not. Record the outputs.

var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}
if ("car" < "cat") {
  alert("car is smaller than cat");
}

//Assignment# 06: Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade.

var english_marks = +prompt("Enter Your English Marks.");
var mathamitices_marks = +prompt("Enter Your mathamitices Marks.");
var computer_marks = +prompt("Enter Your computer Marks.");
var totalMark = 300;
var markObtained, percentage, Grade, Remarks;

if (computer_marks && english_marks && mathamitices_marks) {
  markObtained = english_marks + mathamitices_marks + computer_marks;
  percentage = (markObtained / totalMark) * 100;
  if (percentage >= 80) {
    Grade = "A-One";
    Remarks = "Excellend";
  } else if (percentage >= 70) {
    Grade = "A";
    Remarks = "Good";
  } else if (percentage >= 60) {
    Grade = "B";
    Remarks = "You Need To Improve";
  } else {
    Grade = "Fail";
    Remarks = "Sorry";
  }
} else {
  console.log("Please Enter Numbers Only As Subject Marks.");
}
console.log("MARKS SHEET");
console.log(`Total Mark: ${totalMark}
Marks Obtained: ${markObtained}
Percentage: ${percentage}
Grade: ${Grade}
Remarks: ${Remarks}`);

//Assignment#07:  Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
//       a. If user guesses the same number, show “Bingo! Correct answer”.
//       b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

let secretNumber = Math.trunc(Math.random() * 11);
let userInputSecretNumber = +prompt("Enter guess number between  1 to 10");
console.log(secretNumber, userInputSecretNumber);
if (userInputSecretNumber) {
  //   console.log(secretNumber, userInputSecretNumber);
  if (secretNumber === userInputSecretNumber) {
    console.log("Bingo! Correct answer");
  } else if (userInputSecretNumber + 1 === secretNumber) {
    console.log("Close enough to the correct answer");
  }
}
//Assignment#08: Write a program to check whether the given number is divisible by 3.Show the message to the user if the numberis divisible by 3

var input_number = +prompt("Enter Number Only.");
if (input_number && input_number % 3 == 0) {
  console.log(`The Number You Entered: ${input_number} is divisible by 3.`);
} else {
  console.log(`The Number You Entered: ${input_number} is not divisible by 3.`);
}

//Assignment#09: Write a program that checks whether the given input is an even number or an odd number.

var evenOldNumber = +prompt("Enter Only positive Number Greater Then Zero.");
if (evenOldNumber && evenOldNumber > 0) {
  if (evenOldNumber % 2 == 0) {
    console.log(`Number:${evenOldNumber} is Even Number.`);
  } else {
    console.log(`Number:${evenOldNumber} is old Number.`);
  }
} else {
  console.log("Wrong Entry.Enter Only positive Number Greater Then Zero.");
}

/*Assignment# 10: Write a program that takes temperature as input and shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”
*/

let city_temperature = +prompt("Your city Temperature??");
if (city_temperature > 40) {
  console.log("It is too hot outside.");
} else if (city_temperature > 30) {
  console.log("The Weather today is Normal.");
} else if (city_temperature > 20) {
  console.log("Today’s Weather is cool");
} else {
  console.log("OMG! Today’s weather is so Cool.");
}

/* Assignment# 11: Write a program to create a calculator for +,-,*, / & %using if statements. 
Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.
*/

let first_number = +prompt("Enter first Number");
let second_number = +prompt("Enter second Number");
let operator = prompt("Ënter operator +, -, * and / ");
let final_result;

console.log(`firts number: ${first_number}
second number: ${secretNumber}
operator: ${operator}
`);
if (operator == "+") {
  final_result = first_number + secretNumber;
  console.log(`Addition is: ${final_result}`);
} else if (operator == "-") {
  final_result = first_number - secretNumber;
  console.log(`subratction is: ${final_result}`);
} else if (operator == "*") {
  final_result = first_number * secretNumber;
  console.log(`multiplication is: ${final_result}`);
} else if (operator == "/") {
  final_result = first_number / secretNumber;
  console.log(`division is: ${final_result}`);
}

/************************************************************************************************************** */
/**************chapters #12-13  IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS   ************************ */
/************************************************************************************************************** */

// Assignment #01: Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
// debugger;

var userInputValue = prompt("Enter only One Character 0-9 or a-z or A-Z only");
if (userInputValue) {
  if (
    userInputValue.charCodeAt(0) >= 65 &&
    userInputValue.charCodeAt(0) <= 90
  ) {
    console.log(`User Entered a Capital charator: ${userInputValue}.`);
  } else if (
    userInputValue.charCodeAt(0) >= 97 &&
    userInputValue.charCodeAt(0) <= 122
  ) {
    console.log(`User Entered a small charactor: ${userInputValue}.`);
  } else if (
    userInputValue.charCodeAt(0) >= 48 &&
    userInputValue.charCodeAt(0) <= 57
  ) {
    console.log(`User Entered a Number: ${userInputValue}.`);
  } else {
    console.log("please Enter Character 0-9 or a-z or A-Z only");
  }
} else {
  console.log("cancelled!!");
}

// Assignment #02: Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

var inputNumberOne = +prompt("Enter Number for one:");
var inputNumberTwo = +prompt("Enter Number for second:");

if (inputNumberOne > inputNumberTwo) {
  console.log(`Larger number is : ${inputNumberOne}`);
} else if (inputNumberTwo > inputNumberOne) {
  console.log(`Larger number is : ${inputNumberTwo}`);
} else if (inputNumberOne === inputNumberTwo) {
  // console.log("Both Numbers are equal :", (inputNumberOne, inputNumberTwo));
  console.log(`Both Number are equals : (${inputNumberOne},${inputNumberTwo})`);
} else {
  console.log("Only Numbers are acceptables. ");
}

//Assignment #03: Write a program that takes input a number from user & state whether the number is positive, negative or zero.

var userInputNumber = +prompt("Enter only Numbers.");
if (userInputNumber > 0) {
  console.log("Number is Positive", userInputNumber);
} else if (userInputNumber < 0) {
  console.log("Number is Negative", userInputNumber);
} else if (userInputNumber === 0 || userInputNumber === -0) {
  console.log("Number is Zero", userInputNumber);
} else {
  console.log("You Not Entered a Number. Please Enter a Number.");
}

//Assignment# 04: Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

let char = prompt("Please enter signal character");
let istrue = false;
if (char && char.length === 1) {
  char.toLowerCase();
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    istrue = true;
  } else {
    istrue = false;
  }
} else {
  alert("plz enter single character.");
}

//Assignment #05: Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:  i. Check if user has entered password. If not, then give message “ Please enter your password”.
// ii. Check if both passwords are same. If they are same, show message “Correct! The password youentered matches the original password”. Show Incorrect password” otherwise.

var myPassword = "password123";
var userEnteredPassword = prompt("Entered Your Password:");
if (userEnteredPassword) {
  if (userEnteredPassword === myPassword) {
    console.log(
      "Correct! The password you entered matches the original password."
    );
  } else {
    console.log("“Incorrect password");
  }
} else {
  console.log(`Please enter your password`);
}

/*Assignemnt# 06: This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
}
*/

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

//Assignment #07: Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements.(use case is on the chapter)

var time = +prompt("Entere the Number with  time format like 1900 == 7pm");
if (time) {
  if (time >= 0 && time < 1200) {
    console.log("Good Morning!");
  } else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon!");
  } else if (time >= 1700 && time < 2100) {
    console.log("Good Evening!");
  } else if (time >= 2100 && time < 2359) {
    console.log("Good Night!");
  }
} else {
  console.log("Please Entere time like 1900 is for 7pm");
}

/************************************************************************************************************************** */

// //////////////////////////////////////////////////////////////////////
//              Chapter 14 - 16 SMIT assginment chapter Array         //
////////////////////////////////////////////////////////////////////////

//chapter : Arrays

// Assigement #1: Declare an empty array using JS literal notation to store
// student names in future.
var studentNames = [];

// Assigement #2: Declare an empty array using JS literal notation to store
// student names in future.

var studantNamersArray = new Array();

// Assigement #3: Declare and initialize a strings array

var characters_array = ["A", "B", "C", "D", "E"];

// Assigement #4: Declare and initialize a number array

var number_array = [22, 44, 55, 66, 77, 88, 99, 100];

// Assigement #5: Declare and initialize a boolean array

var boolean_array = [true, 2 > 5, false]; // 2 > 5 return false

// Assigement #6: Declare and initialize a mixed array

var personDetail = [
  "Muhammad waqas moin",
  "Moin khan",
  new Date().getFullYear() - 1992,
  "Javascript internee",
  "twitter@waqaskhan189",
  false,
];

// Assigement #7: Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,BS, BCOM, MS, M. Phil., PhD).

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PHD"];
console.log("Qualification:");
console.log(
  "1):",
  qualifications[0],
  "\n2):",
  qualifications[1],
  "\n2):",
  qualifications[2],
  "\n2):",
  qualifications[3],
  "\n2):",
  qualifications[4],
  "\n2):",
  qualifications[5],
  "\n2):",
  qualifications[6],
  "\n2):",
  qualifications[7]
);

// Assigement #8: Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume tha total marks are 500 for each student, display the scores & percentages of students.

var myStudents = ["Waqas", "Sikandar", "Asad"];
var studentScores = [290, 300, 450];
console.log(
  `Score of ${myStudents[0]} is : ${studentScores[0]}. Percentage : ${
    (studentScores[0] / 500) * 100
  }%`
);
console.log(
  `Score of ${myStudents[1]} is : ${studentScores[1]}. Percentage : ${
    (studentScores[1] / 500) * 100
  }%`
);
console.log(
  `Score of ${myStudents[2]} is : ${studentScores[2]}. Percentage : ${
    (studentScores[2] / 500) * 100
  }%`
);

/*
Assignment# 09:
Initialize an array with color names. Display the array elements in your browser.
a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
c. Add two more color to the beginning of the array. Display the updated array in your browser.
d. Delete the first color in the array. Display the updated array in your browser.
e. Delete the last color in the array. Display the updated array in your browser.
f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in yourbrowser.
*/

let my_colors = ["red", "pink", "orange", "gray", "white", "black", "green"];
console.log(my_colors);
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser.
let addColorBeginning = prompt(
  "Enter Color name to add to the Beginning of the color array."
);
if (addColorBeginning) {
  my_colors.unshift(addColorBeginning);
  console.log("Update my_color array:", my_colors);
}

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
let addColorEnd = prompt(
  "Enter Color name to add to the end of the color array."
);
if (addColorEnd) {
  my_colors.push(addColorEnd);
  console.log("Update my_color array:", my_colors);
}

// c. Add two more color to the beginning of the array. Display the updated array in your browser.
my_colors.unshift("Purple", "Brown");
console.log("Update my_color array:", my_colors);

// d. Delete the first color in the array. Display the updated array in your browser.
my_colors.shift();
console.log("Update my_color array:", my_colors);

//e. Delete the last color in the array. Display the updated array in your browser.
my_colors.pop();
console.log("Update my_color array:", my_colors);

//f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
let addIndex = +prompt("At which poistion you want to add color?");

if (addIndex) {
  //   debugger;
  my_colors.splice(addIndex, 0, "purple");
  console.log("Update my_color array:", my_colors);
}

//g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in yourbrowser.

let deleteIndex = +prompt("At which poistion you want to delete color?");
let howManyColorDelete = +prompt("how many color you want to delete??");
if (deleteIndex && howManyColorDelete) {
  my_colors.splice(deleteIndex, howManyColorDelete);
  console.log("Update my_color array:", my_colors);
}

// Assignment #10: Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

const Scores = [320, 230, 480, 120];
console.log(
  `Scores of the students : ${Scores[0]},${Scores[1]},${Scores[2]},${Scores[3]}`
);
Scores.sort();
console.log(
  `Orderd Scores of the students : ${Scores[0]},${Scores[1]},${Scores[2]},${Scores[3]}`
);

// Assignment #11: Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

var cities = ["Karachi", "Islamabad", "Lahore", "Quetta", "Peshawar"];
var selectedCities = [];
console.log(`Cities List:
${cities[0]},${cities[1]},${cities[2]},${cities[3]},${cities[4]},`);
selectedCities[0] = cities[1];
selectedCities[1] = cities[3];
console.log(`Selected Cities List:
${selectedCities[0]},${selectedCities[1]}`);

// Assignment #12: Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”];
//(Use array’s join method)

var arr = ["This", "is", "my", "cat."];
console.log(`Array:
${arr[0]},${arr[1]},${arr[2]},${arr[3]}`);
var newString = arr.join(" ");
console.log(`String:
${newString}`);

// Assignment#13: Create a new array. Store values one by one in such a way that you can access the values in the order in which theywere stored. (FIFO-First In First Out).

var devices = [];
devices[0] = "keyboard";
devices[1] = "Mouse";
devices[2] = "Printer";
devices[3] = "Monitor";
console.log(`Devices:
${devices[0]},${devices[1]},${devices[2]},${devices[3]}.`);
console.log("Out:\n", devices[0]);
console.log("Out:\n", devices[1]);
console.log("Out:\n", devices[2]);
console.log("Out:\n", devices[3]);

// Assignment#14: Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out).
var computerDevices = [];
computerDevices[0] = "keyboard";
computerDevices[1] = "Mouse";
computerDevices[2] = "Printer";
computerDevices[3] = "Monitor";
console.log(`Devices:
${computerDevices[0]},${computerDevices[1]},${computerDevices[2]},${computerDevices[3]}.`);
computerDevices.reverse();
console.log("Out:\n", computerDevices[0]);
console.log("Out:\n", computerDevices[1]);
console.log("Out:\n", computerDevices[2]);
console.log("Out:\n", computerDevices[3]);


// Assignment#15:

let color = ["red","green","yellow","blue"]

document.write( `<select><option>  ${color[0]}  </option>
<option>  ${color[1]}  </option>
<option>  ${color[2]}  </option>
<option>  ${color[3]}  </option> </select>`)