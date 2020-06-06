var num1 = 3;
var num2 = 5;

var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "</br>");

var subtract = num2 - num1;
document.write("Subtraction of " + num2 + " and " + num1 + " is " + subtract + "</br>");

var mult = num1*num2;
document.write("Multiplication of " + num1 + " and " + " is " + mult + "</br>");

var divi = num1/num2;
document.write("Division of " + num1 + " and " + num2 + " is " + divi + "</br>");

var mod = num2%num1;
document.write("Modulus of " + num2 + " and " + num1 + " is " + mod + "</br></br></br>");


var number1;
document.write("Value after variable declaration is: <b>number</b></br>");
number1 = 5;
document.write("Initial value is: " + number1 + "</br>");
number1 = number1++;
document.write("Value after increment is: " + number1 + "</br>");
number1 = number1 + 7;
document.write("Value after addition is: " + number1 + "</br>");
number1 = number1--;
document.write("Value after decrement is:" + number1 + "</br>");
number1 = number1%3;
document.write("The reminder is: " + number1 + "</br></br>");


var ticket = 600;
var ticQuantity = 5;
document.write("Total cost of buy " + ticQuantity + " tickets to a movie is " + ticket*ticQuantity + " PKR</br></br>");


var table = 4;
document.write("<b>Table of " + table + "</b></br>");
document.write(table + " X " + 1 + " = " + table*1 + "</br>"  );
document.write(table + " X " + 2 + " = " + table*2 + "</br>"  );
document.write(table + " X " + 3 + " = " + table*3 + "</br>"  );
document.write(table + " X " + 4 + " = " + table*4 + "</br>"  );
document.write(table + " X " + 5 + " = " + table*5 + "</br>"  );
document.write(table + " X " + 6 + " = " + table*6 + "</br>"  );
document.write(table + " X " + 7 + " = " + table*7 + "</br>"  );
document.write(table + " X " + 8 + " = " + table*8 + "</br>"  );
document.write(table + " X " + 9 + " = " + table*9 + "</br>"  );
document.write(table + " X " + 10 + " = " + table*10 + "</br></br>");


var c = 25;
var f = 70;
var cent = (f-32)*5/9;
var fern = (c*9/5)+32;
document.write(c + "oC is " + fern + "oF </br>");
document.write(f + "oF is " + cent + "oC</br></br>");


var item1 = 650;
var item2 = 100;
var quan1 = 3;
var quan2 = 7;
var charges = 100;
var itemquan1 = item1*quan1;
var itemquan2 = item2*quan2; 
document.write("<h1>Shopping Cart</h1><br><br><br>")
document.write("Price of Item 1 is " + item1 + "</br>");
document.write("Quantity of Item 1 is " + quan1 + "</br>");
document.write("Price of Item 2 is " + item2 + "</br>");
document.write("Quantity of Item 2 is " + quan2 + "</br>");
document.write("Shipping Charges " + charges + "</br></br>");
document.write("Total cost of your order is " + itemquan1+itemquan2+charges + "</br></br>");


var totalMarks = 980;
var obtMarks = 804;
document.write("<h1>Marks Sheet</h1></br></br></br>");        
document.write("Total Marks: " + totalMarks + "</br>");
document.write("Marks Obtained: " + obtMarks + "</br>");
document.write("Percentage: " + obtMarks/totalMarks*100 + "%</br></br>");



var usDollar = 104.80;
var saudiRiyal = 28;
var totalPakistaniRs = (usDollar*10)+(saudiRiyal*25);
document.write("<h1>Currency in PKR</h1></br></br>");
document.write("Total Currency in PKR:" + totalPakistaniRs);


var anyNumber = 5;
var arth = ((anyNumber+5)*10)/2


var curYear = 2020;
var birYear = 1997;
var age = curYear-birYear;
document.write("<h1>Age Calculator</h1></br></br></br>");        
document.write("Current Year: " + curYear + "</br>");
document.write("Birth Year: " + birYear + "</br>");
document.write("Your Age is : " + age + "</br></br>");


var rad = 20;
var circum = 2*3.142*rad;
var area = 3.142*(rad*rad);
document.write("<h1>The Geometrizer</h1></br></br></br>");        
document.write("Radius of a circle: " + rad + "</br>");
document.write("The Circumference is: " + circum + "</br>");
document.write("The area is: " + area + "</br></br>");


var snake = "Cookies";
var curAge = age;
var maxAge = 65;
var amount = 3;
var supply = (maxAge-curAge)*amount;
document.write("<h1>The Lifetime Supply Calculator</h1></br></br></br>");        
document.write("Favourite Snake: " + snake + "</br>");
document.write("Current age: " + curAge + "</br>");
document.write("Estimated Maximum Age: " + maxAge + "</br>");
document.write("Amount od snake per day: " + maxAge + "</br>");
document.write("“You will need " + supply + " to last you until the ripe old age of " + maxAge + "</br>");


//completed