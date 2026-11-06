//* Abstraction : every employee must define how their pay is calculated
//? here if a abstarct class write some abstarct method, then the chlid class 
//? that extends the parent must write the abstact method that are written in parent class
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
class Manager extends Employee {
    getResources() {
        return ["a", "b"];
    }
    registerEntryTime() {
        return "11.30 AM";
    }
}
export {};
