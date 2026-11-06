//* Polymorphism : diffrent employees respond diffrently to the same method call.
//? method override
//? method overload ( js not support this)
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
    calculatePay(tasxRate) {
        return this.baseSalary - this.baseSalary * tasxRate;
    }
}
class Manager extends Employee {
    calculatePay() {
        return this.baseSalary + 5000;
    }
}
class Developer extends Employee {
    name;
    _baseSalary;
    type;
    constructor(name, _baseSalary, type) {
        super(name, _baseSalary);
        this.name = name;
        this._baseSalary = _baseSalary;
        this.type = type;
    }
    calculatePay(tasxRate) {
        return (this.baseSalary + 3000) - (this.baseSalary + tasxRate);
    }
}
const employee = new Employee("Siam", 10000);
const manager = new Manager("Fahim", 10000);
const developer = new Developer("Firoz", 10000, "Backend");
console.log(employee.calculatePay(0.1));
console.log(manager.calculatePay());
console.log(developer.calculatePay(0.1));
export {};
