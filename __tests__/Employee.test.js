const Employee = require('../lib/employee');

describe("Employee", () => {
    it("should return the employee's name", () => {
        const name = 'Jeff';
        const obj = new Employee(name);
        expect(obj.getName()).toEqual(name);
    });

    it("should return employee ID", () => {
        const id = '3';
        const obj = new Employee('Jeff', id);
        expect(obj.getId()).toEqual(id);
    });

    it("should return employee email", () => {
        const email = 'test@gmail.com';
        const obj = new Employee('Jeff', '3', email);
        expect(obj.getEmail()).toEqual(email);
    });

    it("should return employee's role", () => {
        const string = 'Employee'
        const obj = new Employee();
        expect(obj.getRole()).toEqual(string);
    });
});