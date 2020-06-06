var multArray = [["Shehzad", " Munir"], [" Shehzad", " Arain"], [" Hamza", " Khan"]];





var matrix = [
                [0, 1, 2, 3],
                [1, 0, 1, 2],
                [2, 1, 0, 1]
            ];
document.write("Multidimentional Matrix<br>");
for(var i = 0; i <= 2; i++) {
    for(var j = 0; j <= 3; j++) {
        document.write(matrix[i][j]);
    }

    document.write("<br>");
}
document.write("<br><br>");





document.write("Counting<br>");
for(var i=1; i<11; i++){
document.write(i+"</br>");
}
document.write("<br/>");




var table = +prompt("Enter a number to show its multiplication table",2);
var length = +prompt("Enter length of multiplication table",10);
document.write("Multiplication table of "+table);
document.write("Length "+length+"<br><br>");
for(var t = 1; t<=length; t++){
    document.write(table + " x " + t + " = " + table*t + "<br>");
}





document.write("<br><br>FRUITS<br>");
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var m = 0; m<fruits.length; m++){
    document.write(fruits[m]+ "<br>");
}

document.write("<br><br>FRUITS with index<br>");
for(var n = 0; n<fruits.length; n++){
    document.write("Elements at index " + n + " is " + fruits[n]+ "<br>");
}




//a
document.write("<h1>Counting:</h1>");
for(var i=1; i<11; i++){
document.write(i+", ");
}
document.write("<br/>");


//b
document.write("<h1>Reverse Counting:</h1>");
for(var i=10; i>0; i--){
document.write(i+", ");
}
document.write("<br/>");


//c
document.write("<h1>Even:</h1>");
for(var i=0; i<=20; i++){
    if(i%2==0){
        document.write(i+", ");
    }
}
document.write("<br/>");


//d
document.write("<h1>Odd:</h1>");
for(var i=0; i<=20; i++){
    if(i%2==1){
        document.write(i+", ");
    }
}
document.write("<br/>");


//e
document.write("<h1>Series:</h1>");
for(var i=1; i<=20; i++){
    if(i%2==0){
        document.write(i+"k, ");
    }
}
document.write("<br/>");





var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var match = false;
var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
for(var find = 0; find<=A.length; find++){
    if(A[find]==search){
        var index = find;
        match = true;
    }
}
if(match==true){
    alert(search + " is available at index " + index + " in our bakery");
}
else{
    alert("Sorry "+ search +" is not available in our bakery");
}




var num = [24, 53, 78, 91, 12];

document.write("<br><br>Array items: ");
for(var j = 0; j<=4; j++){
    document.write(num[j] + ", ");
}

for(var i = 0; i<=4; i++){
    if(num[i+1]>num[i]){
        var large = num[i+1];
    }
}
document.write("<br>The largest number is "+ large);







var num1 = [24, 53, 78, 91, 12];

document.write("<br><br>Array items: ");
for(var j = 0; j<=4; j++){
    document.write(num1[j] + ", ");
}

for(var i = 0; i<=4; i++){
    if(num[i+1]<num1[i]){
        var small = num1[i+1];
    }
}
document.write("<br>The Smallest number is "+ small);






document.write("<br><br>");
var five = 5;
for(var range = 1; range<=100; range++){
    if(range%5==0){
    document.write(range+", ");
    }
}