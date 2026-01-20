// // // CHAP 21 - 25 


// // // task 01


// var UserFirstName = prompt("Enter here your first Name :")

// var UserLastName = prompt("Enter here your Last Name :")

// var userFullName = UserFirstName + ' ' + UserLastName


// alert("Welcome to our website " + userFullName)



// // // task 02

// var userFavMobile = prompt("Enter here your fav phone name :")

// var charMobile = userFavMobile.length

// alert("lenght of string : " + charMobile)


// // // task 03


// var pakistan = 'Pakistani'

// var string = pakistan.length
// for(var i = 0 ; i <= pakistan.length; i++){

//     if( 'n' == pakistan[i]){  
//         alert('n is at index number ' + i )
//     }
// }


// // // // task 04

// var helloWorld = 'Hello World'
// for(var i = helloWorld.length - 1; i >= 0 ; i--){

//     if( 'l' == helloWorld[i]){  
//         alert('l is at index number ' + i )
//         break
//     }
    
// }




// // // // task 05

// var country = 'pakistani'

// alert(country[3])


// // // task 06


// var UserFirstName = prompt("Enter here your first Name :")

// var UserLastName = prompt("Enter here your Last Name :")

// var userFullName = UserFirstName.concat(' ',UserLastName)


// alert("Welcome to our website " + userFullName)


// // // task 07

// var city = 'Hyderabad'

// alert(city)

// var replaceCity = city.replace('Hyder' , 'Islam')

// alert(replaceCity)


// // // task 08


// var message = "Ali and Sami are best friends. They play cricket and football together. "

// var chngeMessage = message.replaceAll('and','&')

// alert(chngeMessage)


// // // task 09 

// var num = '472'

// console.log(num)

// var num = Number(num)

// console.log(num)


// // task 10

// var userInput = prompt('Enter here what you want')

// var cap = userInput.toUpperCase()

// alert(cap)


// // task 11 



// var userInput = prompt('Enter here what ever you want to write')

// var title = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase()

// userInput = title

// alert(userInput)



// // task 12

// var num = 35.36 ; 
// var str = num.toString().replace('.','')

// alert(str)


// // task 13

// var username = prompt("Enter username");

// var isValid = true;

// for (var i = 0; i < username.length; i++) {
//     var code = username.charCodeAt(i);

//     if (code >= 33 && code <= 64) {
//         isValid = false;
//         break;
//     }
// }

// if (isValid) {
//     alert("Username accepted");
// } else {
//     alert("Please enter a valid username");
// }



// // task 14   

// var bakkeryItem = ['cake','applepie','cookie','chips','patties'];

// var userRequest = prompt("Welcome to our bakery. What do you want to order?");
// userRequest = userRequest.toLowerCase();

// var found = false;

// for (var i = 0; i < bakkeryItem.length; i++) {

//     if (userRequest === bakkeryItem[i]) {
//         alert(userRequest + " is available at index " + i + " in our bakery");
//         found = true;
//         break;
//     }
// }

// if (found === false) {
//     alert("We are sorry. " + userRequest + " is not available in our bakery");
// }



// // task 15

// var password = prompt("Enter your password:");
// var hasLetter = false;
// var hasNumber = false;
// var isValid = true;


// if (password.length < 6) {
//     alert("Password must be at least 6 characters long");
//     isValid = false;
// }


// var firstCharCode = password.charCodeAt(0);
// if (firstCharCode >= 48 && firstCharCode <= 57) {
//     alert("Password cannot begin with a number");
//     isValid = false;
// }


// for (var i = 0; i < password.length; i++) {
//     var code = password.charCodeAt(i);

//     // a-z or A-Z
//     if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//         hasLetter = true;
//     }

//     // 0-9
//     if (code >= 48 && code <= 57) {
//         hasNumber = true;
//     }
// }

// if (!hasLetter || !hasNumber) {
//     alert("Password must contain both letters and numbers");
//     isValid = false;
// }

// if (isValid) {
//     alert("Password is valid");
// } else {
//     alert("Please enter a valid password");
// }

// // task 16 


// var university = "University of Karachi";


// var arr = university.split("");


// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>");
// }


// // task 17 

// var userInput = prompt("Enter here what ever you want ")

// var arr = userInput.split("").reverse()

// alert(arr[0])


// // task 18 


// var str = "The quick brown fox jumps over the lazy dog";

// var words = str.toLowerCase().split(" ");
// var count = 0;
// alert(words)

// for (var i = 0; i < words.length; i++) {
//     if (words[i] === "the") {
//         count++;
//     }
// }

// alert("Occurrences of 'the': " + count);









