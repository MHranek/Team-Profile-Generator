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
        name: 'name',
        type: 'input',
        message: "What is the team manager's name?"
    },
    {
        name: 'id',
        type: 'input',
        message: "What is the manager's ID?"
    },
    {
        name: 'email',
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
    // create manager object with response, add to employee list
    const newManager = new Manager(response.name, response.id, response.email, response.officeNum);
    employeeList.push(newManager);

    // then prompt user to pick between adding new engineer, intern, or no new employee
    promptAgain();
})
.catch(err => console.error(err));

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
                    promptAgain();
                });
            } else if (response.choice === 'Intern') {
                // if intern, prompt based on intern questions
                inquirer.prompt(internQuestions).then((iResp) => {
                    // create intern object
                    const newIntern = new Intern(iResp.name, iResp.id, iResp.email, iResp.school);
                    employeeList.push(newIntern);
                    promptAgain();
                });
            } else {
                // if no new employee finish prompt and generate HTML
                // console.log(employeeList);
                const newHTML = generateHTML();
                writeToFile(newHTML);
            }
        })
        .catch(err => console.error(err));
};

// Generates the html data
function generateHTML() {
    // generate dynamic html based on employee list
    const employeeStringsArr = [];

    // convert employeeList objects into html coded strings and push to employeeStrings
    for (let i = 0; i < employeeList.length; i++) {
        const obj = employeeList[i];
        const role = obj.getRole();
        let listOption = "";
        switch (role) {
            case 'Engineer':
                    listOption = `Github: <a href="https://github.com/${obj.getGithub()}">${obj.getGithub()}</a>`;
                break;
            case 'Intern':
                    listOption = `School: ${obj.getSchool()}`;
                break;
            default:
                listOption = `Office Number: ${obj.officeNumber}`;
                break;
        }
        const template = `<div class="card">
                    <section class="card-header bg-info">
                        <h2>${obj.getName()}<br>${obj.getRole()}</h2>
                    </section>
                    <section class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${obj.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto: ${obj.getEmail()}">${obj.getEmail()}</a></li>
                            <li class="list-group-item">${listOption}</li>
                        </ul>
                    </section>
                </div>`;
        employeeStringsArr.push(template);
    }

    const employeeStrings = employeeStringsArr.join('');
    // put the employee strings (template literal) into newHTML in the correct spot
    const newHTML = `<!DOCTYPE html>
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
    <header>
        <h1>My Team</h1>
    </header>
    <main>
        <section id="card-section" class="d-flex justify-content-center flex-wrap mx-5">
            ${employeeStrings}
        </section>
    </main>
</body>
</html>`;
    return newHTML;
}

// Writes html data to index.html and style.css
function writeToFile(data) {
    // html
    const newHTML = data;
    fs.writeFile('./output/index.html', newHTML, (err) => {err => console.error(err)});
    // css
    const newCSS = `header {
    text-align: center;
    padding: 40px 0;
    background-color: rgb(159, 100, 255);
    margin-bottom: 40px;
}

.card {
    flex-basis: 250px;
    box-shadow: 3px 3px 10px black;
    margin: 10px;
}

.list-group {
    padding: 10px 0;
}`;
    fs.writeFile('./output/style.css', newCSS, (err) => {err => console.error(err)});
}