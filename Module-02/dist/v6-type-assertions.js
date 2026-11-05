//* Type assertion
const someStatus = "approved";
const showStatus = (status) => {
    console.log("Your current applicationb status is " + status);
};
showStatus(someStatus);
const config = {
    port: 5000,
};
const currentPort = config.port;
// const currentPort : number = config.port as number;
//* constant assertion
const configuration = {
    port: 8000,
    prefix: "/api/v2"
};
export {};
