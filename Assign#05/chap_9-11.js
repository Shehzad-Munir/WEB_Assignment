var city = prompt("Write your City name");
if (city == "karachi") {
    alert("Welcome to city of lights");
}
else {
    alert("Welcome");
};


var gender = prompt("Tell me your Gender please!");
if (gender == "male") {
    alert("Good Morning Sir.");
}
else {
    alert("Good Morning Ma'am.");
};


var light = prompt("Please tell, Current traffic signal light's color..");
if (light == "red") {
    alert("Must Stop");
}
else if (light == "yellow") {
    alert("Ready to Move");
}
else {
    alert("Move now");
};



var fuel = prompt("Tell me your Remaining car fuel in Ltrs");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
};



var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
};


var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
};


var c = 12;
if (c++ === 13) {
    alert("codition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

if (++c < 14) {
    alert("codition 3 is true");
}
if (c === 14) {
    alert("codition 4 is true");
};



var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
};


if (true) {
    alert("True");
}
if (false) {
    alert("False");
};


if ("car" < "cat") {
    alert("car is smaller than cat");
};


var sub1 = prompt("Write your 1st subject name", "English");
var sub2 = prompt("Write your 2nd subject name", "Urdu");
var sub3 = prompt("Write your 3rd subject name", "Maths");
var totalMarks = 100;
var mark1 = +prompt("Tell me your obtained marks in " + sub1);
var mark2 = +prompt("Tell me your obtained marks in " + sub2);
var mark3 = +prompt("Tell me your obtained marks in " + sub3);
var perc1 = mark1 / totalMarks * 100;
var perc2 = mark2 / totalMarks * 100;
var perc3 = mark3 / totalMarks * 100;
var grandTotal = totalMarks + totalMarks + totalMarks;
var grandObt = mark1 + mark2 + mark3;
var grandPer = grandObt / grandTotal * 100;
document.write("<h1>Marks Sheet</h1><br>");
document.write("Total marks: " + grandTotal + "</br>");
document.write("Marks Obtained: " + grandObt + "</br>");
document.write("Percentage: " + grandPer + "%</br>");
if (grandPer >= 80) {
    document.write("<b>Grade: A+</b></br>");
    document.write("Remarks: <b>Superb! Keep it up!</b></br>");
}
else if (grandPer >= 70) {
    document.write("<b>Grade: A</b></br>");
    document.write("Remarks: <b>Excellent Work!</b></br>");
}
else if (grandPer >= 60) {
    document.write("<b>Grade: B</b></br>");
    document.write("Remarks: <b>You Need to Improve!</b></br>");
}
else if (grandPer >= 50) {
    document.write("<b>Grade: C</b></br>");
    document.write("Remarks: <b>Work Hard!</b></br>");
}
else {
    document.write("Try Again for Best!</br></br>");
};



var secNum = 5;
var guesNum = +prompt("Guess Game\nI've a secret number\nGuess any Number from 1 to 10");
if (guesNum === secNum) {
    alert("Bingo! Correct answer\nSecret number is: " + secNum);
}
else if (guesNum == --secNum || guesNum == ++secNum) {
    alert("Close enough to Correct\nSecret number was: " + secNum);
}
else {
    alert("Try Again");
};



var num3 = +prompt("Write any num to Check wether it is divisible by 3 or not?");
if (num3 % 3 === 0) {
    alert("Yes, It is divisible by 3");
}
else {
    alert("Sorry! It is not divisible by 3");
};



var evenOdd = +prompt("Input any number to check weither it is Even or Odd?");
if (evenOdd % 2 === 0) {
    alert("This number is Even");
}
else {
    alert("This number is Odd");
};



var temp = +prompt("Please tell us about Tempratue of today in your city");
if (temp >= 40) {
    alert("Its too hot outside.");
}
else if (temp >= 30 && temp <= 39) {
    alert("The Weather today is Normal");
}
else if (temp >= 20 && temp <= 29) {
    alert("Today Weather is cool");
}
else if (temp >= 10 && temp <= 0) {
    alert("OMG! Today's weather is so cool");
}
else {
    alert("Take Care");
};



var frstNum = +prompt("Enter any number for Arithematic Operation");
var scndNum = +prompt("Enter 2nd Number for Arithematic Operation");
var operation = prompt("Write +, -, *, / or % for getting your answer");
var addAns = frstNum + scndNum;
var subAns = frstNum - scndNum;
if (operation == "+") {

    document.write(frstNum + " + " + scndNum + " = " + addAns);
}
else if (operation == "-") {
    document.write(frstNum + " - " + scndNum + " = " + subAns);
}
else if (operation == "*") {
    document.write(frstNum + " * " + scndNum + " = " + frstNum * scndNum);
}
else if (operation == "/") {
    document.write(frstNum + " / " + scndNum + " = " + frstNum / scndNum);
}
else if (operation == "%") {
    document.write(frstNum + " % " + scndNum + " = " + frstNum % scndNum);
}
else {
    alert("Your input is wrong!");
}

     //completed