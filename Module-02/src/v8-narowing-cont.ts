//* some caveat of Type Guard

const printAll_G = (x: string | string[] | null) =>{
  if ( x && typeof x === "object"){
    for ( let str of x ){
      console.log(str);
    }
  }
  else if (typeof x === "string"){
    console.log(x);
  }
  else{
    console.log(x);
  }
};
printAll_G(null);

//* Equality
const compare = ( x : number | string, y: number | boolean) =>{
  if( x === y ){
    console.log(x, y);
  }
};

const printAll_E = ( x: string | string[] | null) => {
  if (x !== null ){
    if ( typeof x === "object"){
      for (let str of x ){
        console.log(str);
      }
    }
    else{
      console.log(x);
    }
  }
  else{
    console.log(x);
  }
};
printAll_E(null);

//* "in" operator
type Bird = {
  fly: ()=> void;
};
type Fish = {
  swim: ()=> void;
};

const move = (animal : Bird | Fish )=>{
  if ( "fly" in animal){
    animal.fly();
  }
  else{
    animal.swim();
  }
}

//* "instanceof" check
// const date = new Date();
// const err = new Error("Something went wrong");

// console.log(date instanceof Error);
// console.log(err instanceof Date);

const showDate = ( x: Date | string ) =>{
  if ( x instanceof Date ){
    console.log("from Date instance " + x.toISOString()  );  
  }
  else{
    const date = new Date(x);
    console.log( "from string instance " + date.toISOString());
  }
}
showDate( new Date("12-16-1971"));
showDate("12-16-2026");

//* Discriminated union
interface Circle{
  kind: "circle";
  radius: number;
}
interface Square{
  kind: "square";
  sideLength: number;
}

const getArea = (shape : Circle | Square) =>{
  if ( shape.kind === "circle"){
    console.log(shape.radius);
  }
  else{
    console.log(shape.sideLength);
  }
}