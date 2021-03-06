// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// console.log(generateMarkdown);
// TODO: Create an array of questions for user input
const questions = [
  // Repo Name from Github
  {
    type: "input",
    name: "title",
    message: "Please, enter the repo name from GitHub.",
  },

  // Description of Project
  {
    type: "input",
    name: "projectDescription",
    message: "Enter detailed description of project.",
  },

  // How to Install Project
  {
    type: "input",
    name: "Install",
    message: "Explain how one would implement project to their local drive.",
  },

  // Project Use
  {
    type: "input",
    name: "properUsage",
    message: "Instruction and examples of it being used for this section.",
  },

  // License
  {
    type: "list",
    name: "licenseSelection",
    message: "Select appropiate license for this project.",
    choices: [
      "afl-3.0",
      "apache-2.0",
      "artistic-2.0",
      "bsl-1.0",
      "bsd-2-clause",
      "bsd-3-clause",
      "bsd-3-clause-clear",
      "cc",
      "cc0-1.0",
      "cc-by-4.0",
      "cc-by-sa-4.0",
      "wtfpl",
      "ecl-2.0",
      "epl-1.0",
      "epl-2.0",
      "eupl-1.1",
      "agpl-3.0",
      "gpl",
      "gpl-2.0",
      "gpl-3.0",
      "lgpl",
      "lgpl-2.1",
      "lgpl-3.0",
      "isc",
      "lppl-1.3c",
      "ms-pl",
      "mit",
      "mpl-2.0",
      "osl-3.0",
      "postgresql",
      "ofl-1.1",
      "ncsa",
      "unlicense",
      "zlib",
    ],
  },

  // OpenSource Outlet
  {
    type: "input",
    name: "openSource",
    message: "Demonstrate how other users could contribute to your project",
  },

  // Testing
  {
    type: "input",
    name: "tests",
    message: "Portray project tests and show how to test",
  },

  // username for Github
  {
    type: "input",
    name: "username",
    message: "Please, enter GitHub username",
  },

  // Email
  {
    type: "input",
    name: "email",
    message: "Please, enter email address",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      return console.log(error);
    }
    console.log("Your Readme Markdown manifested.");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    var templateData = generateMarkdown(data);
    writeToFile("README.md", templateData);
  });
}

// Function call to initialize app
init();
