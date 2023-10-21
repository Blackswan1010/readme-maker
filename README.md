# Readme Maker 

![License: MIT](https://img.shields.io/badge/MIT-blue.svg) 

## Description 

Making a readme generator with Node JS!


## Table of Contents 

[Usage](#usage)<br/>[License](#license)<br/>[Contributions](#contributions)<br/> 


## Installation 

In the the command prompt line, enter the command 'node index.js', then follow and answer prompts.

## Sample Node JS Code 
```js
// Including packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
```
Packages needed to run the application!

```js
const writeToFile = (fileName, data) => {
    //* use FS module to write data and fileName to readme file
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}
```
Writing to a new file with the data taken.

```js
const init = () => {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile('generatedREADME.md', generateMarkdown(response));
        })
}
```
Initailizes the app with the prompt.

```js
const renderLicenseBadge = (license) => {
  switch (license) {
    case 'MIT':
      return "![License: MIT](https://img.shields.io/badge/MIT-blue.svg)";
```
Renders the license badge by returning the image url.

```js
const renderLicenseLink = (license) => {
  //* return a string that has the link to selected license
  if (license) {
    return "https://api.github.com/licenses/" + license.replace(' ', '-');
  } else {
    return '';
  }
}
```
Renders a link for the license.

```js
const renderLicenseSection = (license) => {
  // create a conditional to check if license exists
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  if (badge && link) {
    return `${badge} \n ${link}`;
  } else {
    return '';
  }
}
```
Renders the Licsense sections with the link and badge.

```js
const renderTable = (data) => {
  let twoStr = [];
  for(let i=0; i < data.contents.length; i++){
    twoStr.push(`[${data.contents[i]}](#${data.contents[i].toLowerCase()})<br/>`);
  }
  const newStr = twoStr.toString().replaceAll(',','');

  return newStr;
}
```
Renders the table of contents on the readme.

```js

// Create a function to generate markdown for README
const generateMarkdown = (data) => {
  // create layout of what you markdown readme with template literals
  return `# ${data.title} \n

## Description \n
${data.description} \n

## Table of Contents \n
${renderTable(data)} \n
....
```
Generates the markdown file with the data taken from user inputs.

## Author Info 

#### Anthony

* [https://github.com/Blackswan1010](https://github.com/Blackswan1010) 


## License
 https://api.github.com/licenses/MIT 



