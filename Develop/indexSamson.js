var fs = require("fs");
var inquirer = require("inquirer");
var dotenv = require("dotenv");
const axios = require("axios");


// https://www.makeareadme.com/

// Prompt questions
// const loginType = process.argv[2];

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
<a href="http://fvcproductions.com"><img src="https://avatars1.githubusercontent.com/u/4284691?v=3&s=200" title="FVCproductions" alt="FVCproductions"></a>
# Project: ${gitInfo.project}

## Table of Contents
- Project Description
- Installation
- Usage
- License
- Contributing
- Tests
- Questions
- User Profile

**Project Description:** ${gitInfo.projectDesc}

**Installation:** ${gitInfo.install}

**Usage:** ${gitInfo.usage}

_GitHub username is_ ${gitInfo.install}

[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)

**Contributing**
> ${gitInfo.contribute}

**Tests**
> ${gitInfo.test}

**Questions**
> ${gitInfo.question}

## GitHubEmail: ${gitInfo.email}`
}





// const questions = [

// ];



// Main Program
function init() {
    askQuestions();
    //writeReadMe();

}

init();



/*
inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
  .then(function({ username }) {


      const queryUrl = `https://api.github.com/users/${response.username}/repos?per_page=100`;

            axios.get(queryUrl).then(function (res) {
                const repoNames = res.data.map(function (repo) {
                    return repo.name;
                });

                const repoDesc = res.data.map(function(repo) {
                    return repo.description
                })

                const repoLic = res.data.map(function(repo) {
                    return repo.license
                })

      fs.writeFile("repos.txt", repoNamesStr, function(err) {
        if (err) {
          throw err;
        }

        console.log(`Saved ${repoNames.length} repos`);
      });
    });
  });

  */

  /*
  # Project: ${gitInfo.project} 
    _Project Description_: ${gitInfo.projectDesc}.


    **GitHub username is ${gitInfo.install} **
    ## GitHubEmail: ${gitInfo.email}
    > This is the END`;
    */