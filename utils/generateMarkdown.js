// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//*must have a couple license options

function renderLicenseBadge(license) {

  return;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
//* return a string that has the link to selected license
return;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  //* create a conditional to check if license exists
  //* call renderlicenseBadge and renderlicenseLink
  //* use template literal to format license section and call functions
  //* return template literal

  return;
}
// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  //* create layout of what you markdown readme with template literals
  //* hint - call renderlicense functions inside this function
  return `# ${data.title} \n

  ## Description \n
  ${data.description} \n\n

  ## Table of Contents \n
  ${data.contents} \n\n

  ## Installation \n
  ${data.installation} \n\n

  ## Usage \n
  ${data.usage} \n\n

  ## Credits \n
  ${data.credits} \n\n

  ## License \n
  ${data.license} \n\n

  ## Badges \n
  ${data.badges} \n\n

  ## Features \n
  ${data.features} \n\n

  ## Contributing \n
  ${data.contribution} \n\n

  ## Tests \n
  ${data.tests} \n\n

`;
}

module.exports = generateMarkdown;