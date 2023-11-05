// Question no 1

var number = (3.45214)
document.write("number"+" "+number,"<br>");

number = Math.round(3.45214)
document.write("round Off Value :",number,"<br>");

number = Math.floor(3.45214)
document.write("floor value :",number, "<br>");

number = Math.ceil(3.45214)
document.write("ceil value :",number, "<br>");


// Question no 2

var num = (-2.673)
document.write("number"+" "+num,"<br>");

num = Math.round(-2.673)
document.write("round Off Value :",num,"<br>");

num = Math.floor(-2.673)
document.write("floor value :",num,"<br>");

num = Math.ceil(-2.673)
document.write("ceil value :",num,"<br>");


// Question no 3

var random = Math.ceil(Math.random()* 6)
console.log(random);


// Question no 4

var random = Math.floor(Math.random() * 2) +1


if(random === 1){
    document.write(random);
    document.write("Random Coin Value : Tails  ");
}else{
    document.write(random);
    document.write("Random Coin Value : Heads  ");
}

// Question no 5

var floor =  Math.floor(Math.random() * 100) +1
console.log(floor);



// Question no 7

var userData = Number(prompt("What is your weight?"));

var result = "";

for (var i = 0; i < userData.length; i++) {

    if (!isNaN(userData[i]) || userData[i] === ".") {
        result += userData[i];
    }
}

if (result == "") {

    console.log("The weight of user is " + result + " kgs");
} else {
    alert("Please Enter your valid weight.");
}

// Question no 8

var Num = 15;
var Random  =  Number(prompt("Enter Your Lucky Number between 1 to 20"));

if(Num === Random){
    alert("Congratulations")
}
else{
    alert("Sorry! Try again Later")
}

// Question no 9 

var Age = Number(prompt("What is your age?"))
var day = new Date();
var currentyear = day.getFullYear()


var BirthDate = currentyear - Age

document.write("Your Age Is : " + Age)
document.write("<br/>")
document.write("Your BirthYear Is : " + BirthDate)


// Question no 10

var user = new Date()
var date = user.getDate() 

if(date <= 15){
    alert("First fifteen days Of the month")
}else{
    alert("Last day Of the month")
 }