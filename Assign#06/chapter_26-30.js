// chapter 26 - 30

// question no 1

// Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


var number = parseFloat(prompt("Enter a positive  integer value \nex:3.452 "))
document.write("<p>number: "+number+"</P><p>round off value: "+Math.round(number)+"</P><p>Floor value: "+Math.floor(number)+"</P><p>ciel value: "+Math.ceil(number))


// question no 2

// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


var number = parseFloat(prompt("Enter a Negartive  float point value \nex:-2.673  "))
document.write("<p>number: "+number+"</P><p>round off value: "+Math.round(number)+"</P><p>Floor value: "+Math.floor(number)+"</P><p>ciel value: "+Math.ceil(number))


// question no 3

// Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


var number = parseInt(prompt("Enter a Integer value \nex:-2 or 2  "))
document.write("<p>the absloute value of "+number+" is "+Math.abs(number)+"</p>")


// question no 4

// Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:


var value = parseInt((Math.random()*6))+1
document.write("<p>random dice value is: "+value+"</p>")


// question no  5

// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var value = parseInt((Math.random()*2))+1
if (value==1) {
    document.write(value+"<p>random coin value is: Heads</p>")
}else{
    document.write(value+"<p>random coin value is: Tails</p>")
}


// question no 6

// Write a program that shows a random number between 1
// and 100 in your browser.


var value = parseInt((Math.random()*100))+1
document.write("<p>random number between 1 and 100:  "+value+"</p>")


// question no 7

// Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


var  user_input = parseFloat(prompt("Enter your weight in kilograms: "))
document.write("<p>The weight of user is "+user_input+" kilograms</P>")


// question no 8

// Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


var random_secret = parseInt((Math.random()*10))+1
var user_input = parseInt(prompt("Enter a number between 1 to  10: "))
if (random_secret == user_input ) {
    alert("congratulation you win a lucky draw ")    
} else {
    alert("Try again! ")
}