const inquirer = require("inquirer");
const fs = require("fs");
const template = require("./utils/generateMarkdown");
const axios = require("axios");

const questions = [{
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
        type: "input",
        name: "githubName",
        message: "What is your github user name"
    },
    {
        type: "input",
        name: "installation",
        message: "how would you install this project?"
    },
    {
        type: "input",
        name: "usage",
        message: "how would you install this project?"
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