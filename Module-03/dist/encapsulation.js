//* Encapsulation: protect a state and change it through methods
//* Access modifier 
//?  - public( access outside the class )
//?  - private( cant access outside the class)
//?  - protected ( access outside the class if the class in inheritant )
//?  - readonly
// class Employee{
//   public name: string;
//   private baseSalary: number;
//   constructor(name: string , baseSalary: number){
//     this.name = name;
//     this.baseSalary = baseSalary;
//   }
//  }
class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    get salaryWithBonus() {
        return this._baseSalary + 5000;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary cant be negative value");
        }
        this._baseSalary = newSalary;
    }
}
const employee1 = new Employee("Siam", 10000);
const employee2 = new Employee("Rahat", 20000);
console.log(employee1.name + " " + employee2.name);
//  employee1.baseSalary // cant acces outiside the class
console.log(employee1.baseSalary);
employee1.baseSalary = 9898;
console.log(employee1.baseSalary);
export {};
