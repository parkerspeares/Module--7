// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  
  switch (license) {
    //The switch statement is used to handle different license types. For each case, the function returns a specific Markdown badge URL
      case 'MIT':
          badge = '[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
          break;
      case 'Apache 2.0':
          badge = '[![Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
          break;
      case 'GPL 3.0':
          badge = '[![GPL License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/GPL-3.0)';
          break;
      case 'BSD 3-Clause':
          badge = '[![BSD 3-Clause License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
          break;
      default:
          badge = '';  // Returns an empty string if there is no license
          break;
  }
  
  return badge;
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  let link = '';
  // If there is no license, return an empty string
  switch (license) {
      case 'MIT':
          link = 'https://opensource.org/licenses/MIT';
          break;
      case 'Apache 2.0':
          link = 'https://opensource.org/licenses/Apache-2.0';
          break;
      case 'GPL 3.0':
          link = 'https://opensource.org/licenses/GPL-3.0';
          break;
      case 'BSD 3-Clause':
          link = 'https://opensource.org/licenses/BSD-3-Clause';
          break;
      // Add more cases as needed for different licenses
      default:
          link = '';  // Return an empty string if there is no license 
          break;
  }
  
  return link;
}
console.log(renderLicenseLink('MIT')); // Outputs: https://opensource.org/licenses/MIT
console.log(renderLicenseLink('GPL 3.0')); // Outputs: https://opensource.org/licenses/GPL-3.0
console.log(renderLicenseLink('Unknown')); // Outputs: ''

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
      return '';  // Return an empty string if no license is provided
  }

  function renderLicenseBadge(license) {
    //Generates the badge Markdown for the associated license.
      let badge = '';
      switch (license) {
          case 'MIT':
              badge = '[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
              break;
          case 'Apache 2.0':
              badge = '[![Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
              break;
          case 'GPL 3.0':
              badge = '[![GPL License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/GPL-3.0)';
              break;
          case 'BSD 3-Clause':
              badge = '[![BSD 3-Clause License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
              break;
          default:
              badge = '';
              break;
      }
      return badge;
  }

  function renderLicenseLink(license) {
    // Provides the link to the license details
      let link = '';
      switch (license) {
          case 'MIT':
              link = 'https://opensource.org/licenses/MIT';
              break;
          case 'Apache 2.0':
              link = 'https://opensource.org/licenses/Apache-2.0';
              break;
          case 'GPL 3.0':
              link = 'https://opensource.org/licenses/GPL-3.0';
              break;
          case 'BSD 3-Clause':
              link = 'https://opensource.org/licenses/BSD-3-Clause';
              break;
          default:
              link = '';
              break;
      }
      return link;
  }

  // Generates the license section
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  if (badge && link) {
      return `## License\n\nThis project is licensed under the [${license}](${link}) license.\n\n${badge}\n`;
  } else {
      return '';  // Return an empty string if there is no license
  }
}
console.log(renderLicenseSection('MIT'));
//Outputs: ## License

import { renderLicenseSection } from './licenseHelpers';  
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${renderLicenseSection(data.license)}

## Questions
If you have any questions about the repo, open an issue or contact [${data.username}](https://github.com/${data.username}).
  `;
}

export default generateMarkdown;