const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super('Jeff', '3', 'test@gmail.com');
        this.officeNumber = officeNumber;
    }

    getRole() {return 'Manager';}
}

module.exports = Manager;