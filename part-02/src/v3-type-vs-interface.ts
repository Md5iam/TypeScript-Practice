//* type alias vs interface

//? Interface is generally connected with objects
//? type alias is more connected to literals, unions, tuples , primitives

type ID = number;

//! interface id = number

type Role = "admin" | "member";

//! interface "admin" | "member"

interface User {
  name : string,
  id: ID,
  role: Role
}
const user : User = {
  name : "SIAM",
  id: 123,
  role:"admin"
}

// TODO : interface

interface Animal{
  species : string;
}
interface Cat extends Animal{
  breed : string;
}
const cat : Cat = {
  breed: "Flex",
  species: "Holo Hala"
};


type Vehicle = {
  brand: string;
};
type Car = Vehicle & { //? "&" symbol is used to perform intersection
  model: string;
};
const car: Car = {
  brand: "Toyta",
  model : "Corella"
};

// interface merge
interface IEmployee {
  name: string;
}
interface IEmployee{
  id: number;
}
const employee: IEmployee = {
  id : 123,
  name : "ABC"
}

// this is not valid
// type IEmployee = {
//   name: string;
// };
// type IEmployee = {
// };

 