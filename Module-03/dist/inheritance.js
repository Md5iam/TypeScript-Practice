//* Inheritance: a Manager is an Employee with an additional responsibility
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
    describe() {
        return `${this.name} earns ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    teamMemberCount;
    // teamMemberCount: number;
    // constructor(name: string, _baseSalary: number,teamMemberCount: number){
    //   super(name, _baseSalary)
    //   this.teamMemberCount = teamMemberCount;
    // }
    constructor(name, _baseSalary, teamMemberCount) {
        super(name, _baseSalary);
        this.teamMemberCount = teamMemberCount;
    }
    describeWork() {
        return `${this.name} manages ${this.teamMemberCount} people`;
    }
    describeManager() {
        return `${this.name} earns ${this._baseSalary}`;
    }
}
const manager = new Manager("Siam", 15000, 12);
console.log(manager.describe()); //  method from Employee class
console.log(manager.describeWork());
console.log(manager.describeManager()); // method from Manager class
export {};
