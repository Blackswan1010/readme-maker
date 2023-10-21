// Including packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
// add type, name, and message for each question
// add questions:  added readme sections (description, usage, license, etc)
const questions = [
    {
        message: 'What is your name:',
        type: 'input',
        name: 'author',
    },
    {
        message: 'What is the title of your project:',
        type: 'input',
        name: 'title',
    },
    {
        message: 'Enter a description of your project:',
        type: 'input',
        name: 'description',
    },
    {
        message: 'Enter a filepath for images to be added if any, hit "ENTER" to skip:',
        type: 'input',
        name: 'usage',
    },
    {
        message: 'Check any titled Sections you may need for your Table of Contents:',
        type: 'checkbox',
        name: 'contents',
        choices: ['Installation', 'Usage', 'Credits', 'License', 'Features', 'Contributions', 'Tests']
    },
    {
        message: 'Choose a license for your project.',
        type: 'list',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'General Public v3', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost Software', 'Creative Commons Zero', 'Eclipse Public', 'Unlicense', 'Mozzila Public']
    },
    {
        message: 'Provide a step by step instruction description to run the application, hit "ENTER" to skip:',
        type: 'input',
        name: 'installation',
    },
    {
        message: 'List your collaborators if any, hit "ENTER" to skip:',
        type: 'input',
        name: 'credits',
    },
    {
        message: 'List your features if any, hit "ENTER" to skip:',
        type: 'input',
        name: 'features',
    },
    {
        message: 'Add guidelines for developers that wish to contribute to your project if any, hit "ENTER" to skip:',
        type: 'input',
        name: 'contributions',
    },
    {
        message: 'Explain your tests if any on how to run them, hit "ENTER" to skip:',
        type: 'input',
        name: 'tests',
    },
    {
        message: 'What is the name of the Github repository?',
        type: 'input',
        name: 'githubName',
    },
    {
        message: 'What is your email?',
        type: 'input',
        name: 'email',
    },
];


// Create a function to write README file
const writeToFile = (fileName, data) => {
    //* use FS module to write data and fileName to readme file
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// Create a function to initialize app
const init = () => {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile('generatedREADME.md', generateMarkdown(response));
        })
}
// Function call to initialize app

init();
// use inquiter to display questions to user
// call generateMarkdown funcoin on the data collected
// take what is returned to us, then pass it to the writeToFile function