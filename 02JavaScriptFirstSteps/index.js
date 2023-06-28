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
        currIndex = str.indexOf(substr,prevIndex+1);
        if(currIndex !== -1)
            console.log("index:",currIndex);
        prevIndex = currIndex;
    }
}

findAllOccurrence("this is a example of his services","is");

// slice method

console.log("Virat Kohli".slice("Virat".length).trimStart());
console.log("abohar".toUpperCase());
console.log("abohar".toLowerCase());

let replaceExp = "this is a example of his services";
console.log(replaceExp.replace("is","/replacedIs/"));
console.log(replaceExp.replaceAll("is","/replacedIs/"));


/*
ARRAYS
=======

=> The pop, push, shift and unshift operate on same array.
=> The splice, return a splice of array. 
=> push, unshift
=> pop, shift

=> map, filter, reduce 
*/
// even i can mix datatypes in arrays

const arr = ["str",123,true,{key: "key"},[1,"str"]]; // allowed.


// Cities Example Start
const cities = ["Abohar","Sri Ganganagar", "Fazilka"];
console.log("All Cities:",cities);
console.log("Total Cities:",cities.length);
console.log("City at index 0:",cities[0]);
// changing city at index 1
cities[1] = "Laduka";
console.log("All Cities:",cities);

const stateCities = [["Abohar","Fazilka","Laduka"],["Sri Ganganagar","Hanuman Garh","Jaipur"]];
console.log(stateCities);

console.log("Index of Abohar: ",cities.indexOf("Abohar"));

cities.push("Chandigarh");
console.log("Cities:",cities);

cities.unshift("jalalabad");
console.log("Cities:",cities);


let poppedCityLIFO = cities.pop();
console.log("Popped City LIFO:",poppedCityLIFO);

let poppedCityFIFO = cities.shift();
console.log("Popped City FIFO:",poppedCityFIFO);

console.log("Cities from index 1 to 2:",cities.slice(1,3));
console.log(cities);


for(let city of cities){
    console.log("City:",city);
}
// Cities Example END


// MARKS EXAMPLE STARTS
const markList = [80,70,90,66,27,98];
console.log("MARK List:",markList);


const cgpaList = markList.map((mark)=>{
    //  i can do anything here,
    // toFixed return in string dataType that's why use TypeScript.
    return mark/10;
})
console.log("CGPA List:",cgpaList);

const AGradeList = markList.filter((mark)=>{
    return mark>=80;
});
console.log("AGradeList List:",AGradeList);

// if not initial values supplied it will take element at index 0 as initial value. 
// let previousMark = 0
// const totalMarks = markList.reduce((previousMark,currentMark)=>{
//     console.log(previousMark,currentMark);
//     return previousMark + currentMark;
// });

// Above code i inaccurate in logically the remember in function the name doesn't matter for a variable
// So, the arg 1 of this method have nothing to do with declared variable previousMark
// We have to specify initial value by passing a second arg to out reduce function.

const totalMarks = markList.reduce((previousMark,currentMark)=>{
    // console.log(previousMark,currentMark);
    return previousMark + currentMark;
},0);
console.log("Total Marks: ",totalMarks);

console.log("MARK List:",markList);


// STATES EXAMPLES WITH SPLIT AND JOIN METHODS

const data = "Punjab,Rajasthan,Kerala,Karnataka";
const states = data.split(",");
console.log(states);

const dataJoin = states.join("|");
console.log(dataJoin)