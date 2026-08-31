"use strict";
// Primitive types are the basic data types in TypeScript.
//  They represent simple values rather than objects. The 
//  main primitives are string, number, boolean, bigint, 
//  symbol, null, and undefined. TypeScript uses these types
//   to know what kind of value a variable can store.
let Name = "Siam";
let Age = 22;
let active = true;
let bigNumber = 100n;
let id = Symbol("id");
let x = null;
let y = undefined;
let username = "sangam";
let age = 40;
let isCreator = true;
const big = 2n ** 63n - 1n;
//Operator '+' cannot be applied to types 'bigint' and 'number'.
// const mixed = big + age
const TOKEN = Symbol("TOKEN");
function yearsToDay(years) {
    return years * 365;
}
console.log(username.toUpperCase());
console.log(yearsToDay(2));
