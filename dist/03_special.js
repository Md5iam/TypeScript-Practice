"use strict";
// Special types in TypeScript are types that behave differently from
//  normal types and are mainly used for specific situations. The
//   important ones are any, unknown, never, and void. any disables
//    type checking, unknown is safer because you must check the
//    value before using it, void is mainly used for functions that
//     return nothing, and never represents something that never 
//     produces a value, such as a function that always throws an error.
//strictNullChecks
// let title : string = "intro"
// title = undefined
let subtitle = "sangam";
// void: function doesn't return a useful value
function log(msg) {
    console.log(msg);
}
//never returns
function fail(msg) {
    throw new Error(msg);
}
//DO NOT USE ANY  -> TRY TO IGNORE AS MUCH AS POSSIBLE
const valueAny = JSON.parse('{"x" : 1}');
valueAny.notThere.toFixed(2); // this compiles but can break/explode at runtime
let b = "hello";
