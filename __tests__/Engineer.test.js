const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    it("should return engineer's info and github", () => {
        const name = 'Jeff';
        const id = '3';
        const email = 'test@gmail.com';
        const github = 'testgithub';
        const obj = new Engineer(name, id, email, github);
        expect(obj.getGithub()).toEqual(github);
        expect(obj.getName()).toEqual(name);
        expect(obj.getId()).toEqual(id);
        expect(obj.getEmail()).toEqual(email);
    });

    it("should return employee's role", () => {
        const string = 'Engineer'
        const obj = new Engineer();
        expect(obj.getRole()).toEqual(string);
    });
});