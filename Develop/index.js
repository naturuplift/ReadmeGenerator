// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// includes generateMarkdown.js file
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a project description:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: [ 'No', 'MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'Other'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  generateMarkdown(data);
}

// TODO: Create a function to initialize app
function init() {
  console.log("I am code before the ASYNC function") // TODO: comment after testing
  inquirer
    /* Pass your questions in here */
    .prompt(questions)
    // Use user feedback to writeToFile
    .then((data) => {
      console.log("I am code INSIDE of the ASYNC function") // TODO: comment after testing
      console.log("User Data: ", data); // TODO: comment after testing
      const readMe = generateMarkdown(data);
      console.log("Generated Data: ", readMe) // TODO: comment after testing
      writeToFile(data);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log("Readme couldn't be rendered in the current environment");
      } else {
        // Something else went wrong
        console.log("Something else went wrong");
      }
    });
    // the requested data is no longer available outside of the PROMPT method
    // console.log("I am code AFTER the ASYNC function")
}

// Function call to initialize app
init();
