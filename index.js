// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'What is your name?',
        type: 'input',
        name: 'name',
    },
    {
        message: 'What is the title of your project?',
        type: 'input',
        name: 'title',
    },
    {
        message: 'Enter a description for your project.',
        type: 'input',
        name: 'description',
    },
    {
        message: 'Choose a license for your project.',
        type: 'list',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'General Public v3', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost Software', 'Creative Commons Zero', 'Eclipse Public', 'Unlicense', 'Mozzila Public']
    },
    {
        message: 'Enter a description for your project.',
        type: 'input',
        name: 'description',
    },
    {
        message: 'Enter a description for your project.',
        type: 'input',
        name: 'description',
    },
    {
        message: 'What is the name of the Github repository?',
        type: 'input',
        name: 'githubName',
    },
];



//* add type, name, and message for each question
//* add questions:  added readme sections (description, usage, license, etc)

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    //* use FS module to write data and fileName to readme file
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile('README.md', generateMarkdown(response));
        })
}
// Function call to initialize app

init();
//* use inquiter to display questions to user
//* call generateMarkdown funcoin on the data collected
//* take what is returned to us, then pass it to the writeToFile funciton