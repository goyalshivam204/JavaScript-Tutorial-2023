/*
 Storing the information you need — Variables
 ============================================
*/

console.log("Storing the information you need — Variables".toUpperCase());

const myNumber = 193131;
const myString = "Shivam Goyal";
const myBoolean = true;
const myArray = [myNumber,myString]; 
const myObject = {myNumber,myString};

console.log(typeof myNumber); // number
console.log(typeof myString); // string
console.log(typeof myBoolean); // string
console.log(typeof myArray); // Object
console.log(typeof myObject); // Object

/* 
BigInt -> Can safely do operation outside the safe number range which is
-2^64 to 2^64
can be invoked either by BigInt() or appending number with n i.e 193131n
*/

const myUnsafeNumber =  Number.MAX_SAFE_INTEGER + 1;
const myBigInt = BigInt(Number.MAX_SAFE_INTEGER + 1);

console.log(Number.isSafeInteger(myUnsafeNumber));
console.log(typeof myBigInt);

// Test your skills 
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_variables


/*
    BASIC MATH IN JAVASCRIPT
    =========================
*/
console.log("BASIC MATH IN JAVASCRIPT");

const myInt = 5;
const myFloat = 6.667;
myInt;
myFloat;

console.log(typeof myInt);
console.log(typeof myFloat);

const lotsOfDecimal = 1.766584958675746364;
console.log(lotsOfDecimal);

const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);

console.log(12 === 5 + 7);
console.log("12" === 5 + 7);
console.log("12" == 5 + 7);

// Test you maths skills
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_Math

/*
    Handling text — strings in JavaScript
    =====================================
*/

console.log("Handling text — strings in JavaScript".toUpperCase());

const label = "Name";
const value = "Shivam";

console.log(`${label}: ${value}`.toUpperCase());
console.log(label + ": " + value);
console.log(label,value);
console.log("content with new line and tab \n\tnewline started");
console.log(`content with new line and tab 
    newline started`);

/*
    Useful string methods
    =====================
*/

console.log("Useful string methods".toUpperCase());

let str = "mozilla";
console.log(`Length: ${str.length}`);
let index = str.length-1;
console.log(`character at index ${index} is: ${str[index]}`);

let substr = "ozil";
if(str.includes(substr)){
    console.log(`${str} includes ${substr}`);
}

let startsWith = "moz";
if(str.startsWith(startsWith)){
    console.log(`${str} starts with ${startsWith}`);
}

let endsWith = "zilla";
if(str.endsWith(endsWith)){
    console.log(`${str} with with ${endsWith}`);
}

// indexOf first occurrence 
const tagline = "MDN - Resources for developers, by developers";
const indexOfFirstOccurrence = tagline.indexOf("developers"); // 20
const indexOfSecondOccurrence = tagline.indexOf("developers",indexOfFirstOccurrence+1);

console.log("indexOfFirstOccurrence:",indexOfFirstOccurrence);
console.log("indexOfSecondOccurrence:",indexOfSecondOccurrence);

const findAllOccurrence = (str,substr) => {
    let prevIndex = 0,currIndex; // index is undefined, that's why that condition
    while(prevIndex !== -1){
        currIndex = str.indexOf(substr,prevIndex);
        if(currIndex !== -1)
            console.log(index);
        prevIndex = currIndex;
    }
}

findAllOccurrence("this is a example of his services","is");