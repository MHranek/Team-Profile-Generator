const Intern = require('../lib/intern');

describe("Intern", () => {
    it("should return intern's school", () => {
        const school = 'RIT';
        const obj = new Intern(school);
        expect(obj.getSchool()).toEqual(school);
    });

    it("should return employee's role", () => {
        const string = 'Intern'
        const obj = new Intern();
        expect(obj.getRole()).toEqual(string);
    });
});