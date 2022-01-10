const Manager = require('../lib/manager');

describe("Manager", () => {
    it("should return engineer's info and office number", () => {
        const name = 'Jeff';
        const id = '3';
        const email = 'test@gmail.com';
        const officeNumber = '45';
        const obj = new Manager(name, id, email, officeNumber);
        expect(obj.officeNumber).toEqual(officeNumber);
        expect(obj.getName()).toEqual(name);
        expect(obj.getId()).toEqual(id);
        expect(obj.getEmail()).toEqual(email);
    });

    it("should return employee's role", () => {
        const string = 'Manager'
        const obj = new Manager();
        expect(obj.getRole()).toEqual(string);
    });
});