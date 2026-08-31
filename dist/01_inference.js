// Inference in TypeScript means TypeScript automatically determines the 
// type of a variable, function return value, or expression without
//  you explicitly writing the type. It looks at the value or context
//   and figures out whether something is a string, number, boolean, etc.
let count = 0; //ts sees number
const site = "acedevhub"; // ts sees the exact literal "acedevhub"
const scors = [10, 20, 30];
//over annonation isnt bad -> just noisy
export function add(a, b) {
    return a + b;
}
console.log(add(5, 2));
//you should also annotate when the type is not obvious
let maybe;
maybe = Math.random() > 0.5 ? "test" : 10;
