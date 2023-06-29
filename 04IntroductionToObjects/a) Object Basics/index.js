/*
    Object Basics
    =============
*/
console.log("OBJECT BASICS\n===============");

// const person = {
//   name: ["Bob", "Smith"],
//   age: 32,
//   bio: function () {
//     console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//   },
//   introduceSelf: function () {
//     console.log(`Hi! I'm ${this.name[0]}.`);
//   },
// };

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

const [key,value] = ["email","bob@gmail.com"];

person[key] = value;
console.log(person);

person.bio();
person.introduceSelf();


// Introducing constructors
// ========================

// A bad way to create a object.
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}

// A way of creating Object.

// I have to use 'new' with function calling to make it work!!!
function Person(name) {
  this.name = name;
  this.email = name+"@gmail.com";
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}


const salva = new Person("Salva");
console.log(salva);
// console.log(typeof salva);
salva.name;
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = new Person("Frankie");
frankie.name;
frankie.introduceSelf();
// "Hi! I'm Frankie."