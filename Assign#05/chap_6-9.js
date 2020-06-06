var a = prompt("Enter any number");
document.write("<b>Result:</b></br>");
document.write("The value of a is: " + a + "</br>");
document.write("...................................</br></br>");
document.write("The vale of ++a is: " + ++a + "</br>");
document.write("Now the value of a is " + a + "</br></br>");
document.write("The value of a++ is: " + a++ + "</br>");
document.write("Now the value of a is: " + a + "</br></br>");
document.write("The value of --a is: " + a + "</br>");
document.write("Now the value of a is: " + a + "</br></br>");
document.write("The value of a-- is: " + a-- + "</br>");
document.write("Now the value of a is: " + a + "</br></br></br>");



var a = 2;
var b = 1;
document.write("a is: " + a + "</br>");
document.write("b is: " + b + "</br>");
var result = --a - --b + ++b + b--;
// Explaination.....
// a = 2
// --a  = 1
// --a - --b     = 1 - 0  = 1
// --a - --b + ++b   =  1 - 0 + 1   = 2
// --a - --b + ++b + b--    =   1 - 0 + 1 + 1    = 3   
document.write("result is: " + result + "</br></br>");



var userName = prompt("Write your name here...");
alert("Hello " + userName);



var tableNum = +prompt("Write a number for any Table", 5);
var tableTimes = 1;
document.write("<b>Table of " + tableNum + " </b></br>");
document.write(tableNum + " X " + tableTimes + " = " + tableNum*tableTimes + "</br>");
document.write(tableNum + " X " + ++tableTimes + " = " + tableNum*tableTimes +"</br>");
document.write(tableNum + " X " + ++tableTimes + " = " + tableNum*tableTimes +"</br>");
document.write(tableNum + " X " + ++tableTimes + " = " + tableNum*tableTimes +"</br>");
document.write(tableNum + " X " + ++tableTimes + " = " + tableNum*tableTimes +"</br>");
document.write(tableNum + " X " + ++tableTimes + " = " + tableNum*tableTimes +"</br>");
document.write(tableNum + " X " + ++tableTimes + " = " + tableNum*tableTimes +"</br>");
document.write(tableNum + " X " + ++tableTimes + " = " + tableNum*tableTimes +"</br>");
document.write(tableNum + " X " + ++tableTimes + " = " + tableNum*tableTimes +"</br>");
document.write(tableNum + " X " + ++tableTimes + " = " + tableNum*tableTimes +"</br></br></br>");




var sub1 = prompt("Write your 1st subject name","English");
var sub2 = prompt("Write your 2nd subject name","Urdu");
var sub3 = prompt("Write your 3rd subject name","Maths");
var totalMarks = 100;
var mark1 = +prompt("Tell me your obtained marks in " + sub1);
var mark2 = +prompt("Tell me your obtained marks in " + sub2);
var mark3 = +prompt("Tell me your obtained marks in " + sub3);
var perc1 = mark1/totalMarks*100;
var perc2 = mark2/totalMarks*100;
var perc3 = mark3/totalMarks*100;
var grandTotal = totalMarks+totalMarks+totalMarks;
var grandObt = mark1+mark2+mark3;
var grandPer = grandObt/grandTotal*100;
document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage%</th></tr>");
document.write("<tr><td>" + sub1 + "</td><td>" + totalMarks + "</td><td>" + mark1 + "</td><td>" + perc1 + "%</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>" + totalMarks + "</td><td>" + mark2 + "</td><td>" + perc2 + "%</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>" + totalMarks + "</td><td>" + mark3 + "</td><td>" + perc3 + "%</td></tr>");
document.write("<tr><th></th><th>" + grandTotal + "</th><th>" + grandObt + "</th><th>" + grandPer + "%</th></tr></table>");

//completed