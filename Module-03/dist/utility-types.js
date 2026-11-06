//* Utility Types ( for peform specefic task we use utility)
// interface PartialUser{
//   id ?: string;
//   name ?: string;
//   email ?: string;
// }
// const updateProfile = (id: string , date : PartialUser)=>{
//   // some backend logic
// }
// updateProfile("id123" , {name: "siam"});
const updateProfile = (id, date) => {
    // some backend logic
};
updateProfile("id123", { name: "siam" });
const initialize = (config) => {
    // some logic
};
initialize({ apiKey: "efwerf", timeout: 3000 });
const preview = {
    name: "ABC",
    description: "sfwr",
};
const directoryEntry = {
    id: 123,
    name: "Siam",
};
const apiUrls = {
    development: "http://127.0.0.1:5500/",
    staging: "http://127.0.0.1:5500/",
    production: "http://127.0.0.1:5500/",
};
export {};
