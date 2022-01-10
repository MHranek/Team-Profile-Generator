const Intern = require('../lib/intern');

describe("Intern", () => {
    it("should return intern's info and school", () => {
        const name = 'Jeff';
        const id = '3';
        const email = 'test@gmail.com';
        const school = 'RIT';
        const obj = new Intern(name, id, email, school);
        expect(obj.getSchool()).toEqual(school);
        expect(obj.getName()).toEqual(name);
        expect(obj.getId()).toEqual(id);
        expect(obj.getEmail()).toEqual(email);
    });

    it("should return employee's role", () => {
        const string = 'Intern'
        const obj = new Intern();
        expect(obj.getRole()).toEqual(string);
    });
});