//* Top types
let helloWorld = "Siam ahmed";
helloWorld = 123;
helloWorld.length;
const something = "Hello World";
// something.length;
//* Core tuples
const num = 123;
const str = "siam";
let something2;
something2 = num;
let someStatus;
let status = "pending";
someStatus = status;
const currentUser = null;
//* Unit type
const greet = () => {
    console.log("Hello W");
};
something2 = greet();
// const greeting: string = greet();
//* Sub type of unit type
const anotherGreet = () => {
    console.log("Hello world");
    // return undefined; // by default
};
console.log(anotherGreet());
//* Bottom type
const getError = (msg) => {
    throw new Error(msg);
};
const x = getError("ABC"); // can assign any type
export {};
