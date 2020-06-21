// chapter 21 - 25

// question no 1

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
var first_name = prompt("Enter your first Name: ")
var second_name = prompt("Enter your Last Name: ")

var full_name = first_name+" "+second_name
alert("Welcome "+full_name+" to our website")


// question no 2

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

var fvrt_phone = prompt("My Favorite Phone is: ")

alert("length of the string is : "+fvrt_phone.length)


// question no 3

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser

var country_name = "Pakistani"
alert("String: "+country_name+" \n index of 'n' : "+country_name.indexOf("n"))


// question no 4

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

var greeting = "Hello world"
document.write("String: "+greeting+" \n index of 'l' : "+greeting.lastIndexOf("l"))


// question no 5

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser

var country_name = "Pakistani"

alert("String: "+country_name+" \n Character at index 3 is : "+country_name[3])

// question no 6

// 6. Repeat Q1 using string concat() method.

var first_name = prompt("Enter your first Name: ")
var second_name = prompt("Enter your Last Name: ")

var full_name = first_name.concat(" "+second_name)
alert("Welcome "+full_name+" to our website")

// question no 7

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var city_name= "Hyderabad"
document.write("<h3>City : "+city_name+"</h3>")

var rep_city_name = city_name.replace("Hydera","Islam")
document.write("<h3>After replacement: "+rep_city_name+"</h3>")


// question no 8

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("<h3>message: "+message+"</h3>")

var rep_message= message.replace("and","&")
document.write("<h3>After Replacement: "+rep_message+"</h3>")

// question no 9

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var string = "472"
document.write("<p>value: "+string+"</p><p>Type: "+typeof(string)+"</p>")
var rep_tonumber = parseInt(string)
document.write("<p>value: "+rep_tonumber+"</p><p>Type: "+typeof(rep_tonumber)+"</p>")

// question no 10

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

var user_input= prompt("Enter a value in lowercase: ")

var chng_UserInput = user_input.toUpperCase()
alert("User input: "+user_input+"\nUpper case word: "+chng_UserInput)

// question no 11

// 11. Write a program that takes user input. Convert and
// show the input in title case.

var user_input= prompt("Enter a value : ")

var chng_UserInput = user_input.replace(user_input[0],user_input[0].toUpperCase())
alert("User input: "+user_input+"\nTitle case word: "+chng_UserInput)


// question no 12

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var number = 35.36

var to_string = number.toString().replace(".","")
document.write("<p>value: "+number+"</p><p>Type: "+to_string+"</p>")

// question no 13

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

var userInput = prompt("Enter Username: ")
for (let a = 0; a < userInput.length; a++) {
    if (userInput[a] == String.fromCharCode(64) || userInput[a] == String.fromCharCode(33) || userInput[a] == String.fromCharCode(44) || userInput[a] == String.fromCharCode(46)) {
        alert("please enter a valid username")
    }
}

// question no 14

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

var A= ["cake", "apple pie", "cookie", "chips", "patties"]

var take_order = prompt("welcome to ABC bakery, what do you want to order sur/ma'am?").toLocaleLowerCase()
 
var found = A.find(function(element) { 
  return element == take_order; 
}); 
if (found) {
    alert(take_order+"is available at index "+A.indexOf(take_order)+" in our bakery")
} else {
    alert("We are sorry. "+take_order+" is not available in our bakery")
    
}

// question no 15

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

var pass = prompt("Enter a password: \na. It should contain alphabets and numbers.\nb. It should not start with a number\nc. It must at least 6 characters long")


if ((pass.match(/[a-z]/g) || pass.match(/[A-Z]/g)) && (pass.match(/[0-9]/g))) {
    if(pass.length >= 6 && typeof(pass[0]) == ""){
        alert("password is correct")

    }else{
        var pass = prompt("Enter Your password again: \npassword can not begin with a number please Enter a valid pass")


    }
    
} else {
   
    
}

// question no 16

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var university = "University of Karachi";

var res = university.split('');
// document.write(res)
for (let i = 0; i < res.length; i++) {
    document.write(res[i]+"<br>")
    
}

// question no 17

// 17. Write a program to display the last character of a user
// input.

var user_input = prompt("Enter A value : ")
alert("user input: "+user_input+"\nlast character of input:"+user_input.charAt(user_input.length-1))


// question no 18

// You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var a = "The quick brown fox jumps over the lazy dog"

var occ = a.toLowerCase()
document.write(occ.match(/the/g).length)