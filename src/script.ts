
// let myString : string = "siam"
// let myNumber : number = 4564
// let myBoolean : boolean = false
// let mySymbol : symbol = Symbol()
// let myBigInt : bigint = 100n

// Type safe function
const addTwo = (a : number, b : number) : number => {
  return a + b ;
}  
console.log(addTwo(100 , 20))

// Array and Tuple an readomly modifier
const arr : string[] = ["Siam" , "Fahim", "Juton"]
 arr.push("Abul")
// const arr1 : Array<string> = ["Psd" , "DSA"]

const numArr : number[] = [1, 2, 3]

//Tuple
const dhakaLatLong : readonly [number, number] = [23.8103, 98.4125]

const concatName = (firstName : string , lastName ?: string) =>{
  if ( !lastName){
    return firstName;
  }
  return firstName + " " + lastName;
}

// console.log(concatName("Siam"))
// console.log(concatName("Siam" , "Fahim"))

const greeting = (greeting : string , fullName : string) : void =>{
  console.log(greeting + " " + fullName)
}

const greeting1 = (greeting : string , fullName : string = "Default") : void =>{
  console.log(greeting + " " + fullName)
}
greeting1("Siam")

 