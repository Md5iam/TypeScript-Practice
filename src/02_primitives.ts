// Primitive types are the basic data types in TypeScript.
//  They represent simple values rather than objects. The 
//  main primitives are string, number, boolean, bigint, 
//  symbol, null, and undefined. TypeScript uses these types
//   to know what kind of value a variable can store.

let Name: string = "Siam";
let Age: number = 22;
let active: boolean = true;
let bigNumber: bigint = 100n;
let id: symbol = Symbol("id");
let x: null = null;
let y: undefined = undefined;

let username: string = "sangam";
let age: number = 40;
let isCreator: boolean = true;

const big: bigint = 2n ** 63n - 1n;

//Operator '+' cannot be applied to types 'bigint' and 'number'.
// const mixed = big + age

const TOKEN: unique symbol = Symbol("TOKEN");

function yearsToDay(years: number): number {
  return years * 365;
}

console.log(username.toUpperCase());
console.log(yearsToDay(2));
