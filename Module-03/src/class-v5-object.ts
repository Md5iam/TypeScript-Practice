 class Employee{
  name: string;
  baseSalary: number;

  constructor(name: string , baseSalary: number){
    this.name = name;
    this.baseSalary = baseSalary;
  }
 }

 const employee1= new Employee("Siam" , 10000);
 const employee2= new Employee("Rahat" , 20000);

 console.log( employee1 + " " + employee2);