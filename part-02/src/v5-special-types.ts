//* Top types
let helloWorld : any = "Siam ahmed"
helloWorld = 123
helloWorld.length;

const something : unknown = "Hello World"
// something.length;

//* Core tuples
const num : number = 123;
const str : string = "siam"

let something2 : unknown;
something2 = num

type Status = "pending" | "success"
let someStatus: string;
let status : Status = "pending"
someStatus = status

//* Nullish type
interface User{
  name: string;
}
type LoggedInUser = User | null;
const currentUser: LoggedInUser = null;

//* Unit type
const greet = ()=>{
  console.log("Hello W")
};
something2 = greet();

// const greeting: string = greet();

//* Sub type of unit type
const anotherGreet = () : undefined =>{
  console.log("Hello world");
  // return undefined; // by default
}
console.log(anotherGreet());

//* Bottom type
const getError = (msg: string ): never =>{
  throw new Error(msg);
};

const x: string = getError("ABC"); // can assign any type

