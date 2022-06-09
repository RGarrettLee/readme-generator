// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'None':
      return;
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GPLv2':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  if (license !== 'None') {
    switch(license) {
      case 'MIT':
        link = 'https://opensource.org/licenses/MIT';
        break;
      case 'Apache 2.0':
        link = 'https://opensource.org/licenses/Apache-2.0';
        break;
      case 'GPLv2':
        link = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
        break;
    }
    return `Licensed under the [${license}](${link}) license`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `
## License

${renderLicenseLink(license)}
`
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation

\`${data.installation}\`

## Usage

\`${data.usage}\`

## Tests

${data.tests}

## Credits

${data.contributions}

${renderLicenseSection(data.license)}

## Questions

[My GitHub](https://github.com/${data.username})

Email: ${data.email}
`;
}

module.exports = generateMarkdown;
