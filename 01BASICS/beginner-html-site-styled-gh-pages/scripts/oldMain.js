const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let s1 = "Shivam Goyal";
let n1 = 193131;
let b1 = true;
let a1 = ["Shivam Goyal","UE193131",22];
let o1 = {
    name: "Shivam Goyal",
    rollNo: "UE193131",
    age: 22
}


// console.log("s1's type: ",typeof s1);
// console.log("n1's type: ",typeof n1);
// console.log("b1's type: ",typeof b1);
// console.log("a1's type: ",typeof a1);
// console.log("o1's type: ",typeof o1);

/*
    s1's type:  string
    n1's type:  number
    b1's type:  boolean
    a1's type:  object
    o1's type:  object
*/

/* Mixing data types can lead to some strange results  */

// console.log("10"+10); // 1010
// console.log("10"*10); // 100
// console.log("10"-10); // 0
// console.log("10"/10); // 1
// console.log("10"*"10"); // 100

/* really weird huh! */

/* FUNCTIONS */
function f1(x1,x2){
    return x1 + x2;
}


/* Adding Event Listener */

document.querySelector("html").addEventListener("click",()=>{
     alert("Ouch! Stop poking me!");
})

