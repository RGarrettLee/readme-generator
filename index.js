// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ['What is the name of your project?', 
'Give a description of your project', 
'Installation info', // start of table of contents stuff
'Usage info', // each section must actually link to their respective parts
'Contribution guidelines', // later make each part of this optional with a checkbox
'Test instructions', // end of table of contents items 
'Choose a license for your project', // list & get license badge
'Enter your github username', // put in questions section and link users github
'Enter your email address', // put in questions section
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

        ])
        .then(response => {

        })
}

// Function call to initialize app
init();
