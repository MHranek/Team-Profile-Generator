const Employee = require('../lib/employee');

describe("Employee", () => {
    it("should return the employee's info", () => {
        const name = 'Jeff';
        const id = '3';
        const email = 'test@gmail.com';
        const obj = new Employee(name, id, email);
        expect(obj.getName()).toEqual(name);
        expect(obj.getId()).toEqual(id);
        expect(obj.getEmail()).toEqual(email);
    });

    it("should return employee's role", () => {
        const string = 'Employee'
        const obj = new Employee();
        expect(obj.getRole()).toEqual(string);
    });

    it("should return undefined when given no arguments", () => {
        const obj = new Employee();
        expect(obj.getName()).toEqual(undefined);
        expect(obj.getId()).toEqual(undefined);
        expect(obj.getEmail()).toEqual(undefined);
    });
});