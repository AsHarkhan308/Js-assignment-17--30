// // // chap 17 - 20

// // // task 1


// var multiDimensionalArray = [[], [], []];


// // task 2



// var multiDimensionalArray = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// console.log(multiDimensionalArray);



// // task 3




// for(var i=1; i<=10; i++){

//     console.log(i);

// }




// // task 4




// var tableNum = +prompt("Enter a number to show its multiplication table");

// var tableLength = +prompt("Enter length of multiplication table");

// for(var i = 0 ; i <= tableLength ; i++ ){
//     var result = tableNum * i;
//     console.log(tableNum + " x " + i + " = " + result);
// }



// // task 5




// var fruitsArray = ["apple", "banana", "mango", "orange", "strawberry"]

// for(var i = 0 ; i < fruitsArray.length ; i++){

//     document.write(fruitsArray[i] + '<br>')
// }



// // task 6  


// // a


// document.write(" <h2>Counting :</h2> " +' <br>');


// for(var i = 1 ; i <= 15 ; i++){


// document.write( i + ' , ');

// }


// // b


// document.write(" <h2>Reverse Counting :</h2> " +' <br>');


// for(var i = 10 ; i > 0 ; i-- ){


// document.write( i + ' , ');

// }

// // c


// document.write(" <h2>Even  :</h2> " +' <br>');


// for(var i = 0 ; i <= 20 ; i = i + 2 ){


// document.write( i + ' , ');

// }


// // d


// document.write(" <h2>Odd :</h2> " +' <br>');


// for(var i = 1 ; i <= 20 ; i = i + 2 ){


// document.write( i + ' , ');

// }


// // e


// document.write(" <h2>Series :</h2> " +' <br>');

// for(var i = 2 ; i <= 20 ; i = i + 2 ){


// document.write( i + 'k , ');

// }


// // task 06


var bakkeryItem = ['cake','applepie','cookie','chips','patties'];

var userRequest = prompt("Welcome to our bakery. What do you want to order?");

var found = false;

for (var i = 0; i < bakkeryItem.length; i++) {

    if (userRequest === bakkeryItem[i]) {
        alert(userRequest + " is available at index " + i + " in our bakery");
        found = true;
        break;
    }
}

if (found === false) {
    alert("We are sorry. " + userRequest + " is not available in our bakery");
}


// // task 07

// var Numbers = [24, 53, 78, 91, 12];

// var largest = Numbers[0];

// for(var i = 0 ; i < Numbers.length ; i++){

//     if(Numbers[i] > largest){

//         largest = Numbers[i];
//     }
// }

// console.log("Largest number is: " + largest);


// // task 08 

// var number = 5 

// for(var i = number ; i <= 100 ; i = i + number ){

//     document.write(i + ' , ')
// }













































