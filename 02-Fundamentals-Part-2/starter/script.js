'use strict'; //activating sctrict mode to write secure javascript code, makes it easier to avoid accidental errors.
//this statement should always be the first line of code in a JavaScript file
//strict mode also reserves a few extra words and restricts from naming a variable that word cuz it might become reserved keywords that are added to javascript in the future
// eg of such 'keywords': 
// const interface = 'Audio' //Unexpected strict mode reserved word
// const private = true; //Unexpected strict mode reserved word

/*

//FUNCTIONS

function logger() {
    console.log('My name is Surya');
}

logger();
logger();
logger();

//function declaration vs Expression:

//function declaration:
function calcAge(birthYear) {
    return 2023 - birthYear;
}

//function expression: //notice no function name after the keyword 'function'
const log = function (name) {
    return name;
}

//we store the return value of the function name to log variable

const age = calcAge(2002);
const myName = log('Surya'); //function calling is exact same as function declaration

console.log(myName, age); //output: 21 Surya

//one important difference between function declaration and expression is that function declarations can be called before the definition but expressions can't

*/

//Arrow Function:

//A third way of writing functions which is faster and easier to write. 
//different ways of writing Arrow functions

//  #1


// let age = (birthYear) => {        //almost similar to function expression
//     let now = 2023 - birthYear;
//     console.log(`Your age is ${now}`);
// }

// age(2002);


//  #2

// let age = birthYear => {          // no paranthesis around the value passed in the fn
//     return 2023 - birthYear;
// }

// console.log(age(2002));

//  #3

// let age = birthYear => (2023 - birthYear); //no paranthesis, no curly braces, instead paranthesis after the arrow function, automatic return
// console.log(age(2002));

//  #4

// let age = birthYear => 2023 - birthYear; //no paranthesis anywhere; one liner code; automatic return
// console.log(age(2002));

/*
//Coding challenge

const calcAverage = (Score1, Score2, Score3) => ((Score1 + Score2 + Score3) / 3);

// const dolphinScore1 = 44;
// const dolphinScore2 = 23;
// const dolphinScore3 = 71;

// const koalaScore1 = 65;
// const koalaScore2 = 54;
// const koalaScore3 = 49;

const dolphinAverageScore = calcAverage(85, 54, 41);
const koalaAverageScore = calcAverage(23, 34, 27);

function checkWinner(dolphinAverageScore, koalaAverageScore) {
    if (dolphinAverageScore >= 2 * koalaAverageScore)
        console.log(`Dolphins win (${dolphinAverageScore} vs. ${koalaAverageScore})`);
    else if (koalaAverageScore >= 2 * dolphinAverageScore)
        console.log(`Koalas win (${dolphinAverageScore} vs. ${koalaAverageScore})`);
    else
        console.log(`No team wins.`);
}

checkWinner(dolphinAverageScore, koalaAverageScore);
*/

//ARRAYS:

//two ways of creating arrays in javascript:
// const friends = ['Surya', 'Chandra', 'Uttara', 'Meems']; //notice square brackets; important!
// const myScore = new Array(8.6, 8.5, 8.2);

//Array Methods:
//  arrayName.length --> returns the length of the array //notice no paranthesis after length cuz its not a function !!important!!
//  arrayName.push(element) --> inserts the element at the end of the array
//  arrayName.unshift(element) --> inserts the element at the start of the array
//  arrayName.pop() --> pops the last element from the array
//  arrayName.shift() --> pops the first element from the array
//  arrayName.indexOf(element) --> returns the index where element is present; if not returns -1
//  arrayName.includes(element) --> returns boolean value, if present true; if not false; uses strict equality (===)

//coding challenge #2
/*

function calcTip(amount) {
    if (amount >= 50 && amount <= 300)
        return 0.15 * amount;
    else
        return 0.20 * amount;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

*/

//OBJECTS:


//small coding challenge:
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmidtmann',
    age: 2023 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`);
*/

// small coding challenge #2

/*

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmidtmann',
    age: 2023 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    state: function () {
        console.log(`${this.firstName} is a ${this.age} year old teacher, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`);
    }
};

jonas.state();

*/

//Coding Challenge #3:

/*

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        return this.mass / this.height ** 2;
    }
};

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        return this.mass / this.height ** 2;
    }
};

console.log(`${mark.firstName}'s BMI (${mark.calcBMI()}) is ${mark.calcBMI() > john.calcBMI() ? 'higher' : 'lower'} than ${john.firstName}'s BMI (${john.calcBMI()})`);

*/

// Coding Challenge #4

/*

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(amount) {
    if (amount >= 50 && amount <= 300)
        return 0.15 * amount;
    else
        return 0.20 * amount;
}

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];
}

console.log(tips);
console.log(totals);

function calcAverage(arr = []) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i]
    return sum / arr.length;
}

console.log(calcAverage(totals));

*/
