//* Inheritance: a Manager is an Employee with an additional responsibility

class Employee{
  constructor(
    public name: string,
    private _baseSalary: number,
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

  describe(): string{
    return `${this.name} earns ${this.baseSalary}`;
  }

 }

 class Manager extends Employee{
  teamMemberCount: number;

  constructor(name: string, _baseSalary: number,teamMemberCount: number){
    super(name, _baseSalary)
    this.teamMemberCount = teamMemberCount;
  }
 }

const manager = new Manager("Siam" , 15000, 12);
console.log(manager.describe());
