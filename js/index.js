// learning JavaScript
console.log('Running Js Today......');


/**
 *!   Variables
 **  Rules of naming variables
 *
 * 1. cannot be a reserved word
 * 2. should be  meaningful and unique
 * 3. cannot start with a number (1name)
 * 4. should not contain a space or hyphen (-)
 * 5. Are case sensitive 
 */
let name = 'Nzyoka10'; 
console.log(name); 

let firstName = 'Nzyoka10';
let lastName = 'eric';

console.log(lastName); 

/**
 * ! Constants in JavaScript
 * used to declear none changing varaibles in JavaScript
 */

const interestRate = 0.2;
//interestRate = 1;
console.log(interestRate);


/**
 **  Primitive or Value data types
* ---- Strings, Number, Boolean, Undefined, and Null
 */
let sName = 'Nzyoka'; // string literal 
let age = 30; //number literal
let isApproved = false; //boolean literal (True Or False)
let fName = undefined; 
let selectColor = null; 
let city = 'makueni';


// JS is dynamic languange
// reference data types 
/**
 * object
 * array\
 * function
 */

// object person
let person = {
    name: 'Nzyoka',
    age: 30,
    city: 'Makueni'
};

//array 
let fruits = ["apple", "orange", "mango", "Dunda"];

// function
function greet(name, age, city) {
    console.log('Hello ' + name + ' ' + age + ' ' + city);
}

greet( name, age, city);