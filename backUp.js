const inquirer = require("inquirer");
const fs = require("fs");
const template = require("./utils/generateMarkdown");
const axios = require("axios");

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
        type: "checkbox",
        name: "lecense",
        choices: ["MIT", "GNU GPLv3"],
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

function writeToFile(fileName, data) {
    inquirer.prompt(questions)
        .then(
            function(answers) {
                fs.writeFile("README.md", template(answers),
                    function(err, data) {
                        if (err) throw err;
                        console.log("it worked!")
                    })
            }
        )
}


inquirer
    .prompt({
        message: "Enter Your username",
        name: "username"
    })
    .then(function({ username }) {
        const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

        axios
            .get(queryUrl)
            .then(function(res) {
                // repoNames = res.data.map(function(repo) {
                //     return repo.name
                // })

                console.log(res)


            });


    });

// writeToFile();