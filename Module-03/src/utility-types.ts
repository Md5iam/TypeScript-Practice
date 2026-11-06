//* Utility Types ( for peform specefic task we use utility)

//* Partial (required to optional )
interface User{
  id: string;
  name: string;
  email: string;
}

// interface PartialUser{
//   id ?: string;
//   name ?: string;
//   email ?: string;
// }
// const updateProfile = (id: string , date : PartialUser)=>{
//   // some backend logic
// }
// updateProfile("id123" , {name: "siam"});

const updateProfile = (id: string , date : Partial<User>)=>{
  // some backend logic
}
updateProfile("id123" , {name: "siam"});

//* Required (optional to required)
interface Config{
  apiKey ?: string;
  timeout ?: number;
}
const initialize = (config : Required<Config>) =>{
  // some logic
}
initialize({ apiKey: "efwerf" , timeout: 3000});

//* Pick ( pick secefic attribute from object )
interface Product{
  id: number;
  name: string;
  price: number;
  description: string;
}
type ProductPreview = Pick<Product, "name" | "description">;

const preview : ProductPreview = {
  name: "ABC",
  description: "sfwr",
}

//* Omit (delete secefic attribute from object)
interface Employee{
  id: number;
  name: string;
  salary: number;
  nid: string;
}
type PublicEmployee = Omit<Employee, "salary" | "nid">;
const directoryEntry: PublicEmployee = {
  id: 123,
  name: "Siam",
}

//* Record
type Environment = "development" | "staging" | "production";
const apiUrls: Record<Environment, string> = {
  development: "http://127.0.0.1:5500/",
  staging: "http://127.0.0.1:5500/",
  production: "http://127.0.0.1:5500/",
}

  

