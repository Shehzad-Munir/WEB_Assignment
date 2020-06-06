var studntName = [];


var studentObj = new Array();




var strngArray = ["cat","dog","parrot","pegeon","chicks","sparrows"];




var numArray = [2 , 4 , 6 , 8 , 10];

 

var boolArray = [true, false] 




var mixArray = ["there ","are ",6,"pets ","and ",5,"index in this array"];



var qual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// document.write("<h1>Qualifications:</h1><ol><li>" + qual[0] + "</li><li>" + qual[1] + "</li><li>" + qual[2] + "</li><li>" + qual[3] + "</li><li>" + qual[4] + "</li><li>" + qual[5] + "</li><li>" + qual[6] + "</li><li>" + qual[7] + "</li></ol><hr/>" );
for(var i = 0; i<=7; i++){
    document.write(i+1 + ") " + qual[i] + "<br>");
}




studntName = ["Ali", "Raheel", "Muddu"];
var scores = [320 , 400 , 350];
var perc1 = (scores[0]/500 * 100);
var perc2 = (scores[1]/500 * 100);
var perc3 = (scores[2]/500 * 100);
document.write("<br><br>Score of " + studntName[0] + " is " + scores[0] + " Percentage:" + perc1 + "%</br>");
document.write("Score of " + studntName[1] + " is " + scores[1] + " Percentage:" + perc2 + "%</br>");
document.write("Score of " + studntName[2] + " is " + scores[2] + " Percentage:" + perc3 + "%</br></br><hr/>");




var colors = ["Red", "Yellow", "Green", "Blue", "Pink"];
alert(colors);

//a
var addColorB = prompt("Which color you want to add in beginning?");
colors.unshift(addColorB);

//b
var addColorL = prompt("Which color you want to add at the end?");
colors.push(addColorL);

//c
colors.unshift("Purple", "Maroon");
alert("This is updated array\n" + colors);

//d
colors.shift();
alert(colors);

//e
colors.pop();
alert(colors);

//f
var askPos = +prompt("At which index do you want to add any color?");
var askColor = prompt("And which color?");
colors.splice(askPos, 0, askColor);
alert("This is array after adding your color\n" + colors);

//g
var deletIndex = +prompt("At what index do you want to delete color?");
var noOfDel = +prompt("How many colors do you want to delete?");
colors.splice(deletIndex,--noOfDel);
alert("This is array after deleting colors\n" + colors);




var studentsScores = [250, 390, 165, 371, 245, 203, 198];
document.write("<b>Sores of Students: "+studentsScores+"</b></br></br>");
studentsScores.sort();
document.write("<b>Ordered scores of Students: "+studentsScores+"</b></br>");

        



var cities = ["Karachi", " Lahore", " Islamabad", " Quetta", " Peshawar"];
var selectCities = cities.slice(1, 4);
document.write("Cities list: <b>"+cities+"</b></br>");
document.write("Selected Cities list: <b>"+selectCities+"</b></br>");





var arr = ["This ", " is ", " my ", " cat"];
var strng = arr.join(" ");
document.write("Array: "+arr+"</br>");
document.write("String: "+strng+"</br>");






var hardware = ["keyboard", " mouse", " printer", " monitor"];
document.write("<br>LIFO<br>");
for(var h = 0; h<=3; h++){
document.write("<br>Out:<br>" + hardware[h]);
}




var hardware = ["keyboard", " mouse", " printer", " monitor"];
document.write("<br><br>FIFO<br>");
for(var g = 3; g>=0; g--){
document.write("<br>Out:<br>" + hardware[g]);
}





var phone = ["Apple","Samaung","Motrola","Nokia","Sony","Haier"];
document.write("<h2>Drop down</h2><select><option>"+phone[0]+"</option><option>"+phone[1]+"</option><option>"+phone[2]+"</option><option>"+phone[3]+"</option><option>"+phone[4]+"</option><option>"+phone[5]+"</option></select>");