"use strict";
// Type assertion in TypeScript means telling TypeScript, 
// “I know the type of this value better than you do.” It
//  does not change the actual value or convert it to another
//   type; it only tells the TypeScript compiler to treat
//    the value as a specific type.
let value = "Hello";
let text = value;
console.log(typeof (text));
const raw = '{"id" : 1, "name" : "A"}';
const riskyUser = JSON.parse(raw);
console.log(riskyUser.name);
function isUser(v) {
    return (typeof v === "object" &&
        v !== null &&
        "id" in v &&
        typeof v.id === "number" &&
        "name" in v &&
        typeof v.name === "string");
}
const maybe = JSON.parse(raw);
if (isUser(maybe)) {
    console.log(maybe.name); //safe
}
