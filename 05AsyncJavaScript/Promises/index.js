/*
    Reference:- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises

    TakeAway
    ========
    
    =>  Use await, async rather then then,catch if there is a dependency between
        consecutive line of code i.e result of previous used in next
    =>  Only, await function don't give certainty that all lines inside it will run before completion 
        of it. as we can use a async function within it which not started with await keyword.
    => Use Promise.all instead of await when no dependency among separate asynchronous operations.

*/



/*
    In Below we are showing a basic example of an async operation.
    => fetching of data is a asynchronous process.
    Expected output:- 
        Promise {<pending>}
        Started request…
        Received response: 200

    => Because, when we console.log fetchPromise it's still a promise no what its states (pending, fulfilled, rejected)
    => And after we are saying promise.then which is required a callback function which passed the response 
        of the promise in case of fulfilled. which take time.
*/

// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// console.log(fetchPromise);

// fetchPromise.then((response) => {
//   console.log(`Received response: ${response.status}`);
// });

// console.log("Started request…");

/*
FETCH PROMISE 2
===============
In below we still going in callback hell so what is profit of that.
So, we generally don't do that kind of shit instead we return required 
result from our promise and use chaining.
=> Because '.then' itself return a promise.
*/

// console.log("FETCH PROMISE 2"); // don't work expected as Async

// const fetchPromise2 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// fetchPromise2.then((response) => {
//   const jsonPromise = response.json();
//   jsonPromise.then((data) => {
//     console.log(data[0]);
//   });
// });


/*
FETCH PROMISE 3
===============



*/

// console.log("FETCH PROMISE 3"); // don't work expected as Async

// const fetchPromise3 = fetch(
//   "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// fetchPromise3
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data[0]);
//     });
// 'Uncaught (in promise) TypeError: Failed to fetch' required catch block


/*
    CATCH BLOCK
    ===========

    Intentionally we pass bad URL so we get an error. 
*/

// const fetchPromise4 = fetch(
//   "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// fetchPromise4
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[0]);
//   })
//   .catch((error)=>{
//     console.log(`Could not get products: ${error}`);
//     // console.error(`Could not get products: ${error}`);
//   });


/*
  COMBINING MULTIPLES PROMISES
  ============================
*/

const fetchPromise5 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise6 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);
const fetchPromise7 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);



Promise.all([fetchPromise5, fetchPromise6, fetchPromise7])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });


/*
  THERE ARE LOT MORE EXAMPLE ON THE SITE MENTIONED ABOVE IN REFERENCES 
  SEE FOR MORE DETAILS.

  Promise.any
  try,catch block
  await and async

  use Promise.then() in main scope you can't use await keyword in common file.
*/