// chapter 26 - 30

// question no 1

// Write a program that displays current date and time in
// your browser


var date_time = new Date()
document.write("<p>"+date_time+"</p>")


// question no 2

// Write a program that alerts the current month in words.
// For example December.


var month_number = new Date()
var month = ["January","February","March", "April", "May", "June","July","August","September","October","November","December"]
var get_month  = month_number.getMonth() 
document.write("<p>Current Month is : "+month[get_month]+"</p>")


// question no 3

// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

var date_time = new Date()
var n = date_time.toString();
document.write("<p>Today is : "+n.slice(0,3)+"</p>")


// question no 4

// Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.


var date_time = new Date()
var day = date_time.getDay()
if (day == 0 || day == 6) {
    document.write("Its a Fun day\n")
}


// question no 5 

// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.


var date_time = new Date()
var day = date_time.getDate()
if (day < 16) {
    document.write("<br>First fifteen days of the month.")
}else{
    document.write("<br><br>Last days of the month")
}


// question no 6 

// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.


var current_date = new Date()
var millisecond  = Date.now("1970/01/01 24:00:00:")
var seconds = (millisecond/1000);
var min = parseInt(seconds/60)

document.write("<p>Current date: "+current_date+"</p><p>Elapsed millisecond since january 1, 1970: "+current_date+"</p><p>Elapsed minutes since january 1, 1970: "+min+"</p>")  


// question no 7

// Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.


var current_date = new Date()
var  time = current_date.getHours()
if (time >= 12) {
    document.write("<p>It's PM</p>")
} else {
    document.write("<p>It's AM</p>")
}


//  question  no 8

// Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.


var Later_date = new Date("2020/12/31")
document.write("<p>Later date: "+Later_date+"</p>")


// question no 9

// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015


var millisecond  = Date.now("2015/06/18")
var seconds = parseInt(millisecond/1000);
var min = parseInt(seconds/60)
var hours = Math.round(min/60)
var days  = Math.floor(hours / 24)
document.write("<p>"+days+"days have passed since 1st Ramdhan, 2015 </p>")


// question  no 10

// Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
var millisecond  = Date.now("2015/01/01")
var current_date = new Date()
var seconds = parseInt(millisecond/1000);
document.write("<p>On reference date : "+current_date+", <br>"+seconds+" Seconds had passed since begining of 2015 </p>")


// question no 11

// Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

var date = new Date()

document.write("<p> current Date is: "+date+"</p>")
date.setHours(20, 14, 1)
document.write("<p>1 Hour ago its: "+date+"</p>")

// question no 12

// Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

var date = new Date()

document.write("<p> current Date is: "+date+"</p>")
date.setFullYear(date.getFullYear()-100)
document.write("<p>100 Years: "+date+"</p>")


// question no 13

// Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var age = parseInt(prompt("Enter Your age: "))

document.write("<p>Your Age is: "+age+"</p>")
date.setFullYear(date.getFullYear()-age)
var n = date.getFullYear();
document.write("<p>Your Age is: "+n+"</p>")