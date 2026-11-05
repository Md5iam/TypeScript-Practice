//* Type assertion

//* "as" syntax
type Status = "pending" | "approved" | "rejected";
const someStatus : string = "approved";

const showStatus = (status : Status)=>{
  console.log("Your current applicationb status is " + status);
};
showStatus(someStatus as Status);

//* No-null assertion
interface Config{
  port ?: number;
}
const config : Config = {
  port : 5000,
};

const currentPort : number = config.port!;
// const currentPort : number = config.port as number;

//* constant assertion
const configuration = { // we totally lock a object
  port : 8000,
  prefix : "/api/v2"
} as const;



