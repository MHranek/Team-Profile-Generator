const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    it("should return engineer's github", () => {
        const github = 'testgithub';
        const obj = new Engineer("","","",github);
        expect(obj.getGithub()).toEqual(github);
    });

    it("should return employee's role", () => {
        const string = 'Engineer'
        const obj = new Engineer();
        expect(obj.getRole()).toEqual(string);
    });
});