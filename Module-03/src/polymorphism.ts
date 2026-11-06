//* Polymorphism : diffrent employees respond diffrently to the same method call.
//? method override
//? method overload ( js not support this)

class Employee{
  constructor(
    public name: string,
    protected _baseSalary: number,
  ){}

  get baseSalary() : number{
    return this._baseSalary;
  }

  get salaryWithBonus(): number{
    return this._baseSalary + 5000;
  }
  
  set baseSalary(newSalary: number){
    if ( newSalary < 0 ){
      throw new Error ("Salary cant be negative value");
    }
    this._baseSalary = newSalary
  }

  calculatePay(tasxRate: number){
    return this.baseSalary - this.baseSalary * tasxRate;
  }

 }

 class Manager extends Employee {
  override calculatePay(){
    return this.baseSalary + 5000;
  }
 }

class Developer extends Employee{
  constructor(
    public name: string,
    protected _baseSalary: number,
    public type: string,
  ){
    super(name, _baseSalary);
  }

  override calculatePay(tasxRate: number){
    return (this.baseSalary + 3000) - (this.baseSalary + tasxRate) ;
  }
}

 const employee = new Employee("Siam" , 10000);
 const manager = new Manager("Fahim", 10000);
 const developer = new Developer("Firoz", 10000, "Backend");

 console.log(employee.calculatePay(0.1));
 console.log(manager.calculatePay());
 console.log(developer.calculatePay(0.1));
 
