"use strict";
// Objects in TypeScript are values that store multiple related properties
//  together, where each property has its own type. TypeScript allows you
//   to define the expected types of those properties so that incorrect 
//   values are detected during development.
const user1 = { id: 1, name: "sangam", createdAt: new Date() };
const user2 = {
    id: 2,
    name: "john",
    createdAt: new Date(),
    email: "email",
};
const c1 = { whatever: 1 };
const c2 = { likes: 1, views: 2, shares: 3, random: 5 };
