const wrapInArray = <T>( value : T)=>{
  return [value];
}

const stringArr = wrapInArray<string>("abc");
const numberArr = wrapInArray<number>(123);
const booleanArr = wrapInArray<boolean>(false);

stringArr.map((item) => item.toUpperCase());

//  interface UserResponse{
//   data: {
//     name: string;
//     role: string;
//   }
//   success: boolean;
//   statusCode: number;
//  }

//   interface BlogResponse{
//   data: {
//     title: string;
//     description: string;
//     date: string;
//   }
//   success: boolean;
//   statusCode: number;
//  }

 interface User{
   name: string;
   role: string;
 }

  interface Blog{
    title: string;
    description: string;
    date: string;
 }

interface ApiResponse<T>{
  data: T,
  success: boolean;
  statusCode: number;
}

type UserResponse = ApiResponse<User>;
type BlogResponse = ApiResponse<Blog>;

const userRes: UserResponse = {
  statusCode: 200,
  success: true,
  data: {
    name: "siam",
    role:"sdfv"
  }
}

const blogRes: ApiResponse<Blog> = {
  statusCode: 200,
  success: true,
  data: {
    title: "Hello",
    description: "hello hello",
    date: "12-09-2026"
  }
}