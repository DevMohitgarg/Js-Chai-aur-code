//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id === anotherId);


// Reference (Non primitive)

// Array, Objects, Functions

const bigNumber = 323135468434668987n

const heros = ["shaktiman", "naagraj" , "dogra"];
let myObj={
   name:"Mohit",
   age:21 ,
}

const myFunction = function(){
    console.log("Hello World");
}

// https://262.ecma-international.org/5.1/#sec-11.4.3

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anotherName = myYoutubename

anotherName = "ChaiaurCode"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "mohit@google.com"

console.log(userOne.email);
console.log(userTwo.email);