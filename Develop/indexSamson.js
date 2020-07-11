var fs = require("fs");
var inquirer = require("inquirer");
var dotenv = require("dotenv");

// https://www.makeareadme.com/
//https://github.com/othneildrew/Best-README-Template/blob/master/README.md

function askQuestions() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is Git user name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your Git Project Title ?",
                name: "project"
            },
            {
                type: "input",
                message: "Project Description ?",
                name: "projectDesc"
            },
            {
                type: "input",
                message: "GitHubemail ?",
                name: "email"
            },
            {
                type: "input",
                message: "List Installation (All required Code for this program to execute)",
                name: "install"
            },
            {
                type: "input",
                message: "Usage (How this code to be run)",
                name: "usage"
            },
            {
                type: "input",
                message: "License",
                name: "license"
            },
            {
                type: "input",
                message: "Contributing",
                name: "contribute"
            },
            {
                type: "input",
                message: "Tests",
                name: "Questions"
            }
        ])
        .then(function (response) {

            //const gitProjectDetail = response.name;
            let readMe = gitProjectInfo (response);

            fs.writeFile("README.md", readMe, function(err) {
                if (err) {
                  throw err;
                }
                console.log(`Saved repos`);
            });
        });
} // end askQuestions

function gitProjectInfo(gitInfo) {

    return `
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<a href="http://fvcproductions.com"><img src="https://avatars1.githubusercontent.com/u/4284691?v=3&s=200" title="FVCproductions" alt="FVCproductions"></a>
# Title: ${gitInfo.project}

## Table of Contents

* [Project Description](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Questions](#questions)
* [Contributing](#contributing)
* [Roadmap](#roadmap)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)
* [Profile](#profile)

**Project Description:** ${gitInfo.projectDesc}

**Installation:** ${gitInfo.install}

**Usage:** ${gitInfo.usage}

[![License](http://img.shields.io/:license-${gitInfo.project}-blue.svg)](http://doge.mit-license.org)

**Contributing**
> ${gitInfo.contribute}

**Tests**
> ${gitInfo.test}

**Questions**
> ${gitInfo.question}

_GitHub Username Email_: ${gitInfo.email}`
}


// Main Program
function init() {
    askQuestions();
}

init();
