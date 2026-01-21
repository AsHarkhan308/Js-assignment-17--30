

// // // chap 26 - 30


// // // task 01


// var positiveInteger = +prompt("Enter here positive Integer :")

// document.write('Number : ' + positiveInteger + '<br>')

// var roundOfValue = Math.round(positiveInteger)

// document.write('Round of value : ' + roundOfValue + '<br>')

// var floorValue = Math.floor(positiveInteger)

// document.write('Floor value : ' + floorValue + '<br>')

// var ceilValue = Math.ceil(positiveInteger)

// document.write('Ceil value : ' + ceilValue + '<br>')


// // // task 02


// var num = parseFloat(prompt("Enter a negative floating point number:"));

// document.write("number: " + num + "<br>");
// document.write("round off value: " + Math.round(num) + "<br>");
// document.write("floor value: " + Math.floor(num) + "<br>");
// document.write("ceil value: " + Math.ceil(num));


// // // task 03


// var number = +prompt("Enter here any number and we will show you absolute value of those number")

// var absoluteValue = Math.abs(number)

// document.write('The absolute value of ' + number + ' is ' + absoluteValue)


// // // task 04 


// var diceRoll = Math.floor(Math.random() * 6) + 1;

// document.write('Random dice value : ' + diceRoll)   


// // // task 05


// var coinToss = Math.floor(Math.random() * 2) + 1;

// if (coinToss === 2) {
//     document.write(coinToss + '<br> Random coin value : Heads')
// } else {
//     document.write(coinToss + '<br> Random coin value : Tails')
// }



// // // task 06

// var randomNumber = Math.floor(Math.random() * 100 ) + 1 ;

// document.write('Random number between 1 and 100 : ' + randomNumber)



// // // task 07 


// var userInput = prompt("Enter your weight in kilograms");

// var weight = parseFloat(userInput);

// if (!isNaN(weight)) {
//     document.write("The weight of user is " + weight + " kilograms");
// } else {
//     document.write("Invalid input");
// }


// // // task 08

var randomNumber = Math.floor(Math.random() * 10) + 1;

var userNumber = +prompt("Enter any number from 1 to 10");

if (userNumber === randomNumber) {
    alert(
        "Congratulations! You guessed the right number.\n" +
        "Your guess: " + userNumber + 
        "\nSecret number was: " + randomNumber
    );
} else {
    alert(
        "Better luck next time.\n" +
        "Your guess: " + userNumber + 
        "\nSecret number was: " + randomNumber
    );
}




























