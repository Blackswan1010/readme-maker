// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
        {
            message: 'What is the title of your project?',
            type: 'input',
            name: 'title'
        },
        {
            message: 'What is the name of the Github repository?',
            type: 'input',
            name: 'githubName'
        },
        {
            message: 'Enter a description for your project.',
            type: 'input',
            name: 'description'
        },
        {
            message: 'Enter a description for your project.',
            type: 'list',
            name: 'description',
            choices: ['mit', 'agpl', 'apache', 'unlicense', 'bsd-2-clause']
        },
    ];
    
//* add type, name, and message for each question
//* add questions:  added readme sections (description, usage, license, etc)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //* use FS module to write data and fileName to readme file

}

// TODO: Create a function to initialize app
function init() { 

}
// Function call to initialize app

init();
//* use inquiter to display questios to user
//* call generateMarkdown funcoin on the data collected
//* take what is returned to us, then pass it to the writeToFile funciton