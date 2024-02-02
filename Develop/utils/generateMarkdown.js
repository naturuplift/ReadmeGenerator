// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license ==='MIT') {
        return '[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache 2.0') {
        return '[![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'GNU GPLv3') {
        return '[![GNU GPLv3 License](https://img.shields.io/badge/License-GNU%20GPLv3-green.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'None') {
      return '';
    }
    return `[License](#license)`;
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const liscenseChoice = renderLicenseBadge(data.license)

    return `# ${data.title}
## ${liscenseChoice}

## License: ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
