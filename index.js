

// Create a function that takes the age in years and returns the age in days

 function ageInDays(number_age){

    var daysInYear = 365.25;

    var ageInDays = number_age * daysInYear;

    console.log(ageInDays);

}

ageInDays('26');

// ----------------------------------------------------------------


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

// ----------------------------------------------------------------


// Create a function that takes any non-negative number as an array and return
// it with its digits in descending order. Descending order is when you sort from highest to lowest.

function sortDigits(number){
    if(number < 0){
        return 'Input must be a non-negative number';
    }

    var digits = Array.from(number.toString());

    var sortDigits = digits.sort(function(a,b){
        return b - a;

    })

    var sortNumber = parseInt(sortDigits.join(''))
    return sortNumber;

}

var number = (67539011);
var result = sortDigits(number);
console.log(result);

// ----------------------------------------------------------------


// Create a function that takes an array of numbers and returns the average of this numbers.

function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
  
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    var average = sum / numbers.length;
    return average;
  }
  
  var number = [2, 4, 6, 8, 10];
  var result = calculateAverage(number);
  console.log(result); 

// ----------------------------------------------------------------


// ** what is the output of 
// Console.log( [ ]  == [ ] )
// Console.log( { } == { } )
// And explain your answer

console.log([] == []); // Output: false  

//  The answer will be false.
//  This is due to the fact that when you use [] to create two empty arrays,
//  you are generating two different objects in memory. For objects,
//  the == operation compares references instead of content.
//  Because these are two separate array objects in memory,
//  reference values are different, and the equality check gives false.

console.log({} == {}); // Output: false

// same answer


// ----------------------------------------------------------------


// ** what is the output of this code with explaination

function main() {
  console.log("A");
  setTimeout(function print() {
    console.log("B");
  }, 0);
  console.log("C");
}
main();

// Output
// A
// C
// B

// The main function is called, which prints "A" to the console,
//  after a 0 second delay using setTimeout(), and then prints "C"
//  and waiting 0 second then then prints "B"

// ----------------------------------------------------------------


// ** what is the output of this code with explaination
var num = 8;
var num = 10;
console.log(num);

// the output will be '10'

// I have two variable declarations for num in the same scope.
// The second declaration will overwrite the first one. 


// ----------------------------------------------------------------


// ** what is the output of this code with explaination

function sayHi() {
  console.log(name); // Here variable 'name' is hoisted but not initialized so it's 'undefined'
  console.log(age); // ReferenceError: age is not defined
  var name = 'Ayush';
  let age = 21;
}
sayHi();

// the output undefined for name and ReferenceError for age.