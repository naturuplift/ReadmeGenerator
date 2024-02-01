// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
function generateREADME(answers) {
    // Define the README content template
    const questions = `
  # ${answers.title}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
 
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}  

  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}

  ## License
  ![License Badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
  
  This project is licensed under the ${answers.license} license.
  
  ## Questions
  For questions about this project, please contact [${answers.username}](https://github.com/${answers.username}) at ${answers.email}.
  `;

    return questions;
}

console.log(questions); // TODO: delete when tested

// TODO: Create a function to write README file


function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app


function init() {}

// Function call to initialize app
init();
