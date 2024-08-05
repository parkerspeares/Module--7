// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let badge = '';
  // If there is no license, return an empty string
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

