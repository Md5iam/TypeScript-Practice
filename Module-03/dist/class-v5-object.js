class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}
const employee1 = new Employee("Siam", 10000);
const employee2 = new Employee("Rahat", 20000);
console.log(employee1.name + " " + employee2.name);
export {};
