var character = prompt("Enter any Alphabet to know it's ASCII code");
var char = character.charCodeAt(0);
if (char >= 65 && char <= 90) {
    alert("It is Upper case");
}
else if (char >= 97 && char <= 122) {
    alert("It is lower case")
}


var integer1 = +prompt("Enter 1st number");
var integer2 = +prompt("Enter 2nd number");
if (integer1 > integer2) {
    alert("Your input " + integer1 + " is Greater");
}
else if (integer1 < integer2) {
    alert("Your input " + integer2 + " is Greater");
}
else {
    alert("Your both inputs are equals");
};



var num1 = +prompt("Enter any number to state that whether is is positive, negative or zero");
if (num1 > 0) {
    alert("Your input number is Positive");
}
else if (num1 < 0) {
    alert("Your input number is Negative");
}
else {
    alert("Your number is neither positive nor negative, it is " + num1);
};



var ch = prompt("Write vowel letter");
if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
    alert("True");
}
else {
    alert("False");
}


var password = "abc123";
var pass = prompt("Please enter your password");
if (pass == password) {
    alert("Correct Password");
}
else if (pass == "") {
    alert("Please enter Password");
}
else {
    alert("Incorrect password");
};



var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting);
}
else {
    greeting = "Good evening";
    alert(greeting);
}



var time = +prompt("Enter current Time of digital clock of 4 digits")
if (time >= 0000 && time < 1200) {
    alert("Good morning!");
}
else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
}
else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
}
else if (time >= 2100 && time <= 2359) {
    alert("Good night!");
}
else {
    alert("Enter valid digits")
}

 //completed