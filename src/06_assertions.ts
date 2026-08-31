// Type assertion in TypeScript means telling TypeScript, 
// “I know the type of this value better than you do.” It
//  does not change the actual value or convert it to another
//   type; it only tells the TypeScript compiler to treat
//    the value as a specific type.

let value: unknown = "Hello";
let text = value as string;
console.log(typeof(text));

const raw = '{"id" : 1, "name" : "A"}';

const riskyUser = JSON.parse(raw) as { id: number; name: string };

console.log(riskyUser.name);

type User22 = { id: number; name: string };

function isUser(v: unknown): v is User22 {
  return (
    typeof v === "object" &&
    v !== null &&
    "id" in v &&
    typeof (v as any).id === "number" &&
    "name" in v &&
    typeof (v as any).name === "string"
  );
}

const maybe = JSON.parse(raw) as unknown;
if (isUser(maybe)) {
  console.log(maybe.name); //safe
}


