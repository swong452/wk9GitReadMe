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
                message: "Installation ?",
                name: "install"
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
    # Project: `;
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