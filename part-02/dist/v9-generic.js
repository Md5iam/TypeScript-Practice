const wrapInArray = (value) => {
    return [value];
};
const stringArr = wrapInArray("abc");
const numberArr = wrapInArray(123);
const booleanArr = wrapInArray(false);
stringArr.map((item) => item.toUpperCase());
const userRes = {
    statusCode: 200,
    success: true,
    data: {
        name: "siam",
        role: "sdfv"
    }
};
const blogRes = {
    statusCode: 200,
    success: true,
    data: {
        title: "Hello",
        description: "hello hello",
        date: "12-09-2026"
    }
};
export {};
