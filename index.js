// ** Create a function that takes any non-negative number as an array and return it with its digits in descending order. Descending order is when you sort from highest to lowest.

// ** Create a function that takes an array of numbers and returns the average of this numbers.

// ** what is the output of 
// Console.log( [ ]  == [ ] )
// Console.log( { } == { } )
// And explain your answer

// ** what is the output of this code with explaination

// function main() {
//   console.log("A");
//   setTimeout(function print() {
//     console.log("B");
//   }, 0);
//   console.log("C");
// }
// main();


// ** what is the output of this code with explaination
// var num = 8;
// var num = 10;
// console.log(num);

// ** what is the output of this code with explaination
// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = 'Ayush';
//   let age = 21;
// }
// sayHi();




// Create a function that takes the age in years and returns the age in days

 function ageInDays(number_age){

    var daysInYear = 365.25;

    var ageInDays = number_age * daysInYear;

    console.log(ageInDays);

}

// ageInDays('26');


// Create a function that takes an array of numbers and returns the smallest number in the set.

function smallestNumber(numbers){
    var smallest_number = numbers[0];
    for(var i=0; i <numbers.length; i++){
        if(smallest_number > numbers[i]){
            smallest_number = numbers[i];
        }
    } 
    return smallest_number;
}

var arr = [20,1,10,30,22];
var result = smallestNumber(arr);
console.log(result);


// Create a function that takes any non-negative number as an array and return
// it with its digits in descending order. Descending order is when you sort from highest to lowest.
