//* Abstraction : every employee must define how their pay is calculated

//? here if a abstarct class write some abstarct method, then the chlid class 
//? that extends the parent must write the abstact method that are written in parent class

abstract class Employee{
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

  abstract getResources(): string[];
  abstract registerEntryTime(): string;
}

class Manager extends Employee{
  getResources(){
    return ["a", "b"];
  }
  registerEntryTime(){
    return "11.30 AM";
  }
}



