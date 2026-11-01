// rest parameters (...args)
const sum = (...numbers : number[])=>{
  return numbers.reduce((total, sum) => total + sum, 0);
}
console.log(sum(1,2,3,4,5));


const logUserAction = (...args : [ name : string , age : number, isActive : boolean]) =>{
  const[name , age , isActive] = args;
  console.log(name + " " + age + " " + isActive)
}
logUserAction("Siam" , 12, false)