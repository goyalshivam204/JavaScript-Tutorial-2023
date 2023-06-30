/* Sync example */
/* "Hello, my name is Miriam!" */

// let myName;
// myName = "Miriam";
// let greeting = `Hello, my name is ${myName}!`;
// console.log(greeting);

/* Sync example */
/* "Hello, my name is undefined!" */

// let myName;
// setTimeout(()=>{
//     myName = "Miriam";
// },1000); // here, setTimeout is a 'Async' function
// let greeting = `Hello, my name is ${myName}!`;
// console.log(greeting);

/*
    A heavy process which take a long time should be created as async instead of sync 
    for example see :-
        https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing 
        section :- A long-running synchronous function, Event handlers

    Because, if we not do that then our site become irresponsive for longer than expected 
    time. which is a very bad user experience and can be thought of as lag or deadlock 
*/


/*
    Callbacks
    =========
    ==> An event handler is a particular type of callback.
    
*/


/*  even thought it's not doing any async operation but for illustration we creates it as 
    as async function.  
*/ 


const step1 = async (value) => {
    let millisecond = Math.floor((Math.random()*5000));
    await setTimeout(()=>{
        /* doing something. */
        // console.log("step1 within time out is called");
    },millisecond);
    console.log("step1 is called");
    return value+1;
}

const step2 = async (value) => {
    let millisecond = Math.floor((Math.random()*5000));
    await setTimeout(()=>{
         /* doing something. */
        //  console.log("step2 within time out is called");
    },millisecond);
    console.log("step2 is called");
    return value+1;
}

const step3 = async (value) => {
    let millisecond = Math.floor((Math.random()*5000));
    await setTimeout(()=>{
        /* doing something. */
        //  console.log("step3 within time out is called");
    },millisecond);
    console.log("step3 is called");
    return value+1;
}

const doOperation = () => {
    let result = 0;
    // console.log(result); // 0
    result = step1(result);
    // console.log(result); // Promise {<pending>}
    result = step2(result);
    // console.log(result); // Promise {<pending>}
    result = step3(result);
    // console.log(result);    // Promise {<pending>}
}
// doOperation();


/* We need to do above Asynchronously using async or await but traditionally we use redefine each 
and use callback methods */
const doOperationAsync = async () => {
    let result = 0;
    console.log(result); // 0
    result = await step1(result);
    console.log(result); // Promise {<pending>}
    result = await step2(result);
    console.log(result); // Promise {<pending>}
    result = await step3(result);
    console.log(result);    // Promise {<pending>}
}
// doOperationAsync();



/* Doing Async things using Callbacks */

const callbackStep1 = (value,callback) => {
    callback(value+1);
}


const callbackStep2 = (value,callback) => {
    callback(value+1);
}

const callbackStep3 = (value,callback) => {
    callback(value+1);
}

callbackStep1(0,(result1) => {
    callbackStep2(result1, (result2)=> {
        callbackStep3(result2, (result3)=>{
            console.log("result:",result3);
        })
    }) 
})

/*
In Above code we can say, we are in callback hell or pyramid of doom.
Less, readable and even can't understood even if revisit this.
reference:- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
*/