/*
    TakeAway
    ========
    
    => A Promise constructor used to return a promise object.
    => A Promise constructor required one parameter which is a executor function.
    => The executor function itself take 2 arg, both of which are functions.
    => resolve, and reject should be 1st parameter and 2nd parameter respectively.
    => reject invoked implicitly if any error occurs
    => we can also call reject explicitly under a condition. ( but not a good practice )
    => pass value, to resolve which you want in '.then' and pass value in reject which 
       you want in '.catch' or implicitly a error occur passed as argument to reject

*/


const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
    //   throw new Error("Alarm delay must not be negative"); 
      reject(new Error("Alarm delay must not be negative")) // same effect of above line
    }
    if(person === null || person === ""){
        reject("Please, specify the name");
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

// button.addEventListener("click", () => {
//   alarm(name.value, delay.value)
//     .then((message) => {
//         output.textContent = message
//     })
//     .catch((error) => {
//         output.innerHTML = `Couldn't set alarm: ${error}<br/>typeof error: ${typeof error}`
//     });
// });


/* With async and await */

button.addEventListener("click", async () => {
  try {
    const message = await alarm(name.value, delay.value);
    output.textContent = message;
  } catch (error) {
    output.textContent = `Couldn't set alarm: ${error}`;
  }
});