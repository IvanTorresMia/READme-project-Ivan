const inquirer = require("inquirer");
const fs = require("fs");
const template = require("./utils/generateMarkdown");

const questions = [{
        type: "input",
        name: "githubName",
        message: "What is your github user name"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address"
    },
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "type a description of this project."
    },
    {
        type: "list",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        message: "What license would you like to use?"
    },
    {
        type: "input",
        name: "installation",
        message: "what command shouuld be run to install dependencies?"
    },
    {

        type: "input",
        name: "tests",
        message: "what command shouuld be run to tests?"

    },
    {
        type: "input",
        name: "usage",
        message: "what does the user need to know about using this repo?"
    },
    {
        type: "input",
        name: "contributer",
        message: "what does the user neet to know about contributing to the repo?"
    }
];

function writeToFile() {
    inquirer.prompt(questions)
        .then(
            function(answers) {
                if (answers.license == "MIT") {
                    answers.license = "[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)"
                } else if (answers.license == "APACHE 2.0") {
                    answers.license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                } else if (answers.license == "GPL 3.0") {
                    answers.license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
                } else if (answers.license == "BSD 3") {
                    answers.license = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
                } else {
                    answers.license = "None"
                }
                fs.writeFile("./generated/README.md", template(answers),
                    function(err, data) {
                        if (err) throw err;
                        console.log("it worked!")
                    })
            }
        )
}




writeToFile();