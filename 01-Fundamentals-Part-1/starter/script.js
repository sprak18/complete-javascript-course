/*

LECTURE #1: VALUES AND VARIABLES:

let js = 'amazing';
console.log(40 + 8 + 23 - 10); //prints the answer to the console


let firstName = "Surya"; // variable name should start with alphabets ONLY. Naming convention : start with lower case letter, capitalize first letter of every subsequent word. (Lower Camel Case)


console.log(firstName); //prints contents to the console


alert(js); //shows up in the alert pop up while refreshing webpage


let _firstName = "Surya"; //   _ is allowed

let $lastName = "Prakash" //  $ is allowed; No other special characters allowed


// ; is optional at the end of each statement, but add ; at the end of each sentence to make code readable

let PI = 3.1415; // variable names having all uppercase letters are reserved for constants whose value doesnt change throughout the execution

// convention: variable names should accurately describe the value its holding. Makes the code readable and clean

let mySchool = "DAV";
let myCollege = "Manipal" // correct way of declaring variables

let a = "DAV";
let b = "Manipal"; // bad way of declaring variables

//practice assignment 1 : Values and Variables:

let country = "India";
let continent = "Asia";
let population = 140;

console.log(country);
console.log(continent);
console.log(population);

*/


/*

//LECTURE #2: DATATYPES:

let age = 20; //number datatype: Used for BOTH INTEGERS AND FLOATING POINT NUMBERS, unlike C++, Java

let name = "John" //String datatype: sequence of characters

let legalAge = true; //boolean datatype: holds logical true or false.

let place; //undefined "empty value". Value taken is not yet defined

// other datatypes:


// null: also means empty value
// Symbol (introduced: ES2015): Value that is unique and cannot be changed
// BigInt (introduced: ES2020): Larger integers than the Number type can hold

// JavaScript has dynamic typing, you dont have to declare the datatype while declaring variable: eg: int a = 20; -> not required

console.log(typeof legalAge);
console.log(typeof age);
console.log(typeof "Jonas"); //typeof: returns the datatype of the value stored in the variable

//dynamic typing in action:

legalAge = 18;
console.log(typeof legalAge);

let year;
console.log(year); //'undefined' declared automatically to empty variables

// practice assignment 2: Datatypes:

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof language);

*/


/*

//LECTURE #3: LET, CONST AND VAR:

//three different ways of declaring variables.

let age = 20;
age = 21; //value can be reassigned

const BIRTHYEAR = 2002;
// BIRTHYEAR = 2003; -> would give us an error. const variables cant be reassigned

// const BIRTHMONTH; -> would give us an error. const variables have to be assigned a value, they cant be empty

var job = 'programmer';
job = 'coder';
// var is an old way of declaring variables, modern javascript doesnt use var. shouldnt be used generally at all, used only for legacy reasons.

//practice assignment 3: LET, CONST, VAR:
const language = 'Hindi';
//language = 'Kannada';
console.log(language);

*/



//LECTURE #4: OPERATORS:

/*
const presentYear = 2022;
const ageSurya = presentYear - 2002;
const agePC = presentYear - 2021;

console.log(ageSurya, agePC);
console.log("My age 10 years ago was " + ageSurya / 2);

alert("2 raised to the 5th power is " + 2 ** 5); //a raised to the power b is "a**b"

let num = 5;
num += 2; //num = num + 2; similarly: -=, *=, /=
num++; //num incremented by 1 (post increment)

*/



//LECTURE #5: OPERATOR PRECEDENCE:

//look at MDN web docs for the precedence table. A general idea is required

/*

//Coding Challenge #1

const markWeight = 95;
const markHeight = 1.88;

const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);

console.log(markBMI, johnBMI);

const markHeigherBMI = markBMI > johnBMI;

console.log(markHeigherBMI);

*/

/*

// LECTURE 5: STRINGS AND TEMPLATE LITERALS:

// strings can be easily built using template literals/backticks (key above tab), instead of concatenating string literals and variables

const age = 20;
console.log("you are " + age + " years old!"); //without using backticks

console.log(`you are ${age} years old!`); //using template literal, syntax: ${variable name}

*/

/*

// Coding Challenge #2

const markWeight = 95;
const markHeight = 1.88;

const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);

const markHeigherBMI = markBMI > johnBMI;

if (markHeigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
}

else {
    console.log(`Mark's BMI (${markBMI}) is lower than John's BMI (${johnBMI})`);
}

*/

/*

//LECTURE 6: TYPE CONVERSION AND COERSION:

//TYPE CONVERSION : converting one data type to another manually

const inputYear = "2023"; //string

console.log(inputYear + 2); // doesnt add 2023+2 = 2025; concatenates 2 to the string to give 20232

console.log(Number(inputYear) + 2); // Number() built in function converts string to number and adds 2 to give 2025

//trying to forcefully convert a non number to number

const name = 'Surya';
console.log(Number(name)); //gives NaN (not a number); also vscode strikes through

console.log(typeof (NaN)); //NaN is of type 'number'

// converting a number to string

const age = 20;
console.log(String(age), age); // first prints the string "20" and second prints the number 20

//TYPE COERSION : happens when dealing with two values that have different datatypes; javascript will convert one of the values implicitly to match the other

console.log('I am ' + age + ' years old'); // here the + operator triggers a type coersion of number to string. when dealing with numbers and string, javascript implicitly converts number-> string

//same happens in template literals

console.log('20' - '10' - 5); //here the - operator triggers a type coersion of string to number. output is 5
//for comparison:
console.log('20' + '10' + 5); //output is 20105
console.log('20' * '3', '18' / '3'); // * and / operator triggers string to number type coersion as well. output: 60 6

let num = '1' + 1; // 11
num -= 1;
console.log(num); //output 10

*/

/*
//LECTURE 7: TRUTHY AND FALSY VALUES

// javascript coerses these 5 values to false: 0, '', undefined, null, NaN. these are falsy values

console.log(Boolean(0), Boolean(''), Boolean(undefined), Boolean(null), Boolean(NaN)); // false false false false false

console.log(Boolean('Surya'), Boolean(20)) // true true. Non zero numbers and non empty strings are coersed to true

*/

/*
//LECTURE 8: == and ===

// === strict equal to - checks without type conversion
// == loose equal to - checks after performing type conversion implicitly

console.log(18 == '18', 18 === '18'); // output: true false
const favorite = Number(prompt("What's your favorite number"));
console.log(favorite);

if (favorite === 23)
    console.log(`${favorite} is a cool number`);
*/

/*

//Coding challenge #4:

let bill = 275;
let tip = (bill >= 50 && bill <= 300) ? bill * (0.15) : bill * (0.20);
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);

*/

