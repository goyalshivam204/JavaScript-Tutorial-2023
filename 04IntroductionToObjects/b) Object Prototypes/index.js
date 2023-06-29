/*
    Object Prototype
    ================
    => https://www.youtube.com/watch?v=1UTqFAjYx1k
    => 
*/

console.log("OBJECT PROTOTYPE\n================");

const dude = {};
console.log(dude);
dude.name = "shivam";
dude.age = 22;
console.log(dude.talk);
console.log(dude.walk);
console.log(dude.toString);


const mySiblings = ["Shubham","Sheetal"];
console.log(mySiblings);

const myName = "Shivam";
console.log(myName.__proto__);
console.log(myName.__proto__.__proto__);

const human = {
    kind: "Human"
}

const shivam = Object.create(human); // Create a object with prototype of human object
console.log(shivam);
shivam.age = 22;
console.log(shivam);
console.log(shivam.kind);

const shivansh = Object.create(shivam);
shivansh.age = 2;

console.log(shivansh);
console.log(shivansh.age);


class Human {
    talk(){
        return "talking";    
    }
}

class SuperHuman extends Human {
    fly(){
        return "Flying";    
    }
}

const superman = new SuperHuman();
console.log(superman.fly());
console.log(superman.talk());
// console.log(superman.jump());
// console.log(superman);

const p1 = superman.__proto__; // __proto__ will be find in instance.
const p2 = Object.getPrototypeOf(superman);  // by this we also get the same.
const p3 = SuperHuman.prototype; // prototype will be find in Blueprint/Object Class

if(p1 === p2 && p2 === p3){
    console.log("All return the same reference!!!");
    p1.added = "Added";
}

console.log(p1);
console.log(p2);
console.log(p3);

const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);


// 

const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person2(name) {
  this.name = name;
}

Object.assign(Person2.prototype, personPrototype); // Object.assign(target,source);


const person2 = new Person2("person2");
console.log(person2);
person2.greet();

console.log(Object.hasOwn(person2,"name"));
console.log(Object.hasOwn(person2,"greet"));
