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
        name: 'manager-name',
        type: 'input',
        message: "What is the team manager's name?"
    },
    {
        name: 'manager-id',
        type: 'input',
        message: "What is the manager's ID?"
    },
    {
        name: 'manager-email',
        type: 'input',
        message: "What is the manager's Email?"
    },
    {
        name: 'office-num',
        type: 'input',
        message: "What is the manager's office number?"
    }
]

// get user input
inquirer
.prompt(managerQuestions)
.then((response) => {
    // response is all the manager's data
    // TODO create manager object with response, add to employee list

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
        }]).then((reponse) => {
            if (reponse.choice === 'Engineer') {
                // TODO if engineer, prompt based on engineer questions
                
            } else if (response.choice === 'Intern') {
                // TODO if intern, prompt based on intern questions

            } else {
                // TODO if no new employee finish prompt and generate HTML
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
