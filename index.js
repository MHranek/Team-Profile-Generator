// Requires
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// employee list
const employeeList = [];

// Inquirer

// Questions
const managerQuestions = [
    {
        name: 'managerName',
        type: 'input',
        message: "What is the team manager's name?"
    },
    {
        name: 'managerId',
        type: 'input',
        message: "What is the manager's ID?"
    },
    {
        name: 'managerEmail',
        type: 'input',
        message: "What is the manager's Email?"
    },
    {
        name: 'officeNum',
        type: 'input',
        message: "What is the manager's office number?"
    }
]

const engineerQuestions = [
    {
        name: 'name',
        type: 'input',
        message: "What is the engineer's name?"
    },
    {
        name: 'id',
        type: 'input',
        message: "What is the engineer's ID?"
    },
    {
        name: 'email',
        type: 'input',
        message: "What is the engineer's Email?"
    },
    {
        name: 'github',
        type: 'input',
        message: "What is the engineer's github?"
    }
]

const internQuestions = [
    {
        name: 'name',
        type: 'input',
        message: "What is the intern's name?"
    },
    {
        name: 'id',
        type: 'input',
        message: "What is the intern's ID?"
    },
    {
        name: 'email',
        type: 'input',
        message: "What is the intern's Email?"
    },
    {
        name: 'school',
        type: 'input',
        message: "What is the intern's school?"
    }
]
// get user input
inquirer
.prompt(managerQuestions)
.then((response) => {
    // response is all the manager's data
    // TODO create manager object with response, add to employee list
    const newManager = new Manager(response.managerName, response.managerId, response.managerEmail, response.officeNum);
    employeeList.push(newManager);

    // TODO then prompt user to pick between adding new engineer, intern, or no new employee
    promptAgain();
})

// prompt again
function promptAgain() {
    inquirer.prompt([{
            name: 'choice',
            type: 'list',
            message: "What kind of employee do you want to add?",
            choices: ['Engineer', 'Intern', 'I do not want to add another employee'],
        }]).then((response) => {
            if (response.choice === 'Engineer') {
                // if engineer, prompt based on engineer questions
                inquirer.prompt(engineerQuestions).then((eResp) => {
                    // create engineer object
                    const newEngineer = new Engineer(eResp.name, eResp.id, eResp.email, eResp.github);
                    employeeList.push(newEngineer);
                });
            } else if (response.choice === 'Intern') {
                // if intern, prompt based on intern questions
                inquirer.prompt(internQuestions).then((iResp) => {
                    // create intern object
                    const newIntern = new Intern(iResp.name, iResp.id, iResp.email, iResp.school);
                    employeeList.push(newIntern);
                });
            } else {
                // TODO if no new employee finish prompt and generate HTML
                console.log(employeeList);
            }
        })
};

// Generates the html data
function generateHTML() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile</title>
</head>
<body>
    
</body>
</html>`;
}

// Generates CSS
function generateCSS() {
    return ;
}

// Writes html data to index.html and style.css
