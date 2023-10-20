// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//*must have a couple license options
const axios = require("axios");

const renderLicenseBadge = (license) => {
  switch (license) {
    case 'MIT':
      return "![License: MIT](https://img.shields.io/badge/MIT-blue.svg)";

    case 'Apache 2.0':
      return "![License: Apache 2.0](https://img.shields.io/badge/Apache-2.0-blue.svg)";

    case 'General Public v3':
      return "![License: General Public v3](https://img.shields.io/badge/AGPL-v3-blue.svg)";

    case 'BSD 2-Clause':
      return "![License: BSD 2-Clause](https://img.shields.io/badge/BSD_2-blue.svg)";

    case 'BSD 3-Clause':
      return "![License: BSD 3-Clause](https://img.shields.io/badge/BSD_3-blue.svg)";

    case 'Boost Software':
      return "![License: Boost Software](https://img.shields.io/badge/BSL-1.0-blue.svg)";

    case 'Creative Commons Zero':
      return "![License: Creative Commons Zero](https://img.shields.io/badge/CC0-1.0-blue.svg)";

    case 'Eclipse Public':
      return "![License: Eclipse Public](https://img.shields.io/badge/EPL-2.0-blue.svg)";

    case 'Unlicense':
      return "![License: Unlicense](https://img.shields.io/badge/Unlicense-blue.svg)";

    case 'Mozzila Public':
      return "![License: Mozzila Public](https://img.shields.io/badge/MPL-2.0-blue.svg)";

    default: return '';
  }

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string

const renderLicenseLink = (license) => {
  //* return a string that has the link to selected license

  if (license) {
    return axios.get("https://api.github.com/licenses/" + license);
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
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  if (badge && link) {
    return `${badge} \n ${link}`;
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
  ![alt text](assets/images/screenshot.png) \n

  ## Author Info \n
  #### ${data.author}\n
  * [https://github.com/${data.githubName}](https://github.com/${data.githubName}) \n

  ## Credits \n
  ${data.credits} \n

  ## License
  ${renderLicenseSection(data.license)} \n

  ## Features \n
  ${data.features} \n
  ## Contributing \n

  ${data.contribution} \n

`
    ;

  ;

}

module.exports = generateMarkdown;
