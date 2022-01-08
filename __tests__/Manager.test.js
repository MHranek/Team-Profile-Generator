const Manager = require('../lib/manager');

describe("Manager", () => {
    it("should return engineer's office number", () => {
        const officeNumber = '45';
        const obj = new Manager(officeNumber);
        expect(obj.officeNumber).toEqual(officeNumber);
    });

    it("should return employee's role", () => {
        const string = 'Manager'
        const obj = new Manager();
        expect(obj.getRole()).toEqual(string);
    });
})