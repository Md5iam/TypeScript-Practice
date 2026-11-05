// Object type , type alias and interface

const user : {
  name : string;
  age: number;
  isActive: boolean;
  action: ()=> void;
  badges: string[];
} = {
  name: "Siam",
  age: 12,
  isActive: true,
  action: ()=> console.log("Hello world"),
  badges: ['abc', 'def'] 
}

type Address = {
  streetName: string,
  holdingNumber: number
}

type Tuser = {
  name : string;
  age: number;
  isActive: boolean;
  action: ()=> void;
  badges: string[];
  address: Address;
}

const user2 : Tuser = {
  name: "Fahim",
  age: 13,
  isActive: false,
  action: ()=> console.log("Hello world 2"),
  badges: ['abc','def','aba'],
  address: {
    streetName : "20A",
    holdingNumber: 100
  }
}
type str = string
let myName : str = "Siam Ahmed"

interface Iuser {
  name : string;
  age: number;
  isActive: boolean;
  action: ()=> void;
  badges: string[];
}

const user3 : Iuser = {
  name: "Juton",
  age: 10,
  isActive: false,
  action: ()=> console.log("Hello bd"),
  badges: ['abc','def','xyz']
}
