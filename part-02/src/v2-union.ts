// Literal Type 
type Status = "pending"
const status : Status = "pending"
console.log(status)

// Basic Union
type Identity = string | number
const id1 : Identity = "123"
const id2 : Identity = 123
console.log(id1 + " " + id2)

// Literal Union
type Role = "user" | "admin" | "manager"
const userRole : Role = "user"
console.log(userRole)

// Object Union
type Admin = {id : number, role : "admin", privileges: string[]}
type Member = {id : number, role : "member", plans: string[]}

type User = Admin | Member
const user : User = {id: 123, role: "member" , plans: ["abc", "efg"]}
