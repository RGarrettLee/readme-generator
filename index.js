// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ['What is the name of your project?', 
'Give a description of your project', 
'What must users install to use this project?', // start of table of contents stuff
'How do users use this project?', // each section must actually link to their respective parts
'Contribution guidelines', // later make each part of this optional with a checkbox
'Test instructions', // end of table of contents items 
'Choose a license for your project', // list & get license badge
'Enter your github username', // put in questions section and link users github
'Enter your email address' // put in questions section
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) => {
        err ? console.log(err) : console.log('README Generated');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title'
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description'
            },
            { // later on make a checkbox here and a separate 
                type: 'input',
                message: questions[2],
                name: 'installation'
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage'
            },
            {
                type: 'input',
                message: questions[4],
                name: 'contributions'
            },
            {
                type: 'input',
                message: questions[5],
                name: 'tests'
            },
            {
                type: 'list',
                message: questions[6],
                choices: ['MIT'],
                name: 'license'
            },
            {
                type: 'input',
                message: questions[7],
                name: 'username'
            },
            {
                type: 'input',
                message: questions[8],
                name: 'email'
            }
        ])
        .then(response => {
            writeToFile('README', markdown(response));
        })
}

// Function call to initialize app
init();
