/*
    In below I am using my own created Async function instead.
    to demonstrate all use cases for better understanding.  
*/

const dataStore = {
    userAPI: `{
        "status" : 200,
        "data" : [
            {
                "firstName" : "Shivam",
                "lastName" : "Goyal",
                "age" : 22
            },
            {
                "firstName" : "Raman",
                "lastName" : "Bansal",
                "age" : 25
            },
            {
                "firstName" : "Vikas",
                "lastName" : "Singla",
                "age" : 33
            }
        ]
    }`,
    notFoundAPI: `{
        "status" : 404,
        "data" : "Resource Not Found!!!"
    }`,
    authorAPI: `{
        "status" : 200,
        "data" : [
            {
                "name" : "K.C Verma",
                "age" : 65,
                "booksPublished": ["The Theory Electro-Magnetism","Quantum Dynamics"]
            },
            {
                "name" : "Justin Heisenberg",
                "age" : 35,
                "booksPublished": ["The Atom: building block of everything", "Modern Molecular theory"]
            },
            {
                "name" : "Isaac Newton",
                "age" : null,
                "booksPublished": ["Everything about Calculus"]
            }
        ]
    }`,
    bookAPI: `{
       "status" : 200,
       "data" : [
        {
            "author" : "Justin Heisenberg",
            "topic" : "chemistry",
            "name" : "The Atom: building block of everything",
            "price" : 599
        },
        {
            "author" : "Justin Heisenberg",
            "topic" : "chemistry",
            "name" : "Modern Molecular theory",
            "price" : 1699
        },
        {
            "author" : "K.C Verma",
            "topic" : "physics",
            "name" : "The Theory Electro-Magnetism",
            "price" : 999
        },
        {
            "author" : "K.C Verma",
            "topic" : "physics",
            "name" : "Quantum Dynamics",
            "price" : 2999
        },
        {
            "author" : "Isaac Newton",
            "topic" : "Math",
            "name" : "Everything about Calculus",
            "price" : 1999
        }
       ]
    }`
    
}

const asyncFetch = (key)=>{
    const jsonString = dataStore[key];
    // console.log(jsonString);
    const jsonObj = JSON.parse(jsonString);
    // console.log(jsonObj);
}

asyncFetch("authorAPI");