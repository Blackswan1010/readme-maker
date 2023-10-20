// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//*must have a couple license options
const axios = require("axios");

const renderLicenseBadge = (license) => {
  switch (license) {
    case 'MIT':
      return;

    case 'Apache 2.0':
      return;

    case 'General Public v3':
      return;

    case 'BSD 2-Clause':
      return;

    case 'BSD 3-Clause':
      return;
    case 'Boost Software':
      return;

    case 'Creative Commons Zero':
      return;

    case 'Eclipse Public':
      return;

    case 'Unlicense':
      return;

    case 'Mozzila Public':
      return;

    default: return '';
  }

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string

const renderLicenseLink = (license) => {
  //* return a string that has the link to selected license

  if (license) {
    return axios.get("https://api.github.com/licenses/" + license);;
  } else {
    return '';
  }

}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

const renderLicenseSection = (license) => {
  //* create a conditional to check if license exists
  //* call renderlicenseBadge and renderlicenseLink
  //* use template literal to format license section and call functions
  //* return template literal
  if (renderLicenseBadge(license) && renderLicenseLink(license)) {
    return renderLicenseBadge(license);
  } else {
    return '';
  }

}
// TODO: Create a function to generate markdown for README

const generateMarkdown = (data) => {
  //* create layout of what you markdown readme with template literals
  //* hint - call renderlicense functions inside this function
  return `# ${data.title} \n

  ## Description \n
  ${data.description} \n

  ## Table of Contents \n
  ${data.contents} \n

  ## Installation \n
  ${data.installation} \n

  ## Usage \n
  ${data.usage} \n

  ## Author Info \n
  #### ${data.name}\n
  ``md\n
  * [Github](https://github.com/${data.githubName}) \n
  ``\n

  ## Credits \n
  ${data.credits} \n

  ## License \n
  ${data.license} \n

  ## Badges \n
  ${data.badges} \n

  ## Features \n
  ${data.features} \n

  ## Contributing \n
  ${data.contribution} \n

  ## Tests \n
  ${data.tests} \n

`
  renderLicenseSection();

  ;

}

module.exports = generateMarkdown;
