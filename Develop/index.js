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
                message: "Contributing",
                name: "contribute"
            },
            {
                type: "input",
                message: "What is the Repo Name ?",
                name: "repo"
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
[![License](http://img.shields.io/:github-${gitInfo.repo}-blue.svg)](https://github.com/${gitInfo.name}/${gitInfo.repo})

![alt test](samsonGitHubPicture.png "my Avatar")
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


## Project Description: ${gitInfo.projectDesc}
_describe high level project description, may be with screen shot_


### Built With
This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)
* [nodeJS](https://nodejs.org/en/)



## Getting Started

Give instructions on setting up this program in your environment, 
what software dependencies, and how to get start to run the program

### Prerequisites Package 

List any prerequisite packages, and how to install these prequisite package

* npm

\`\`\`sh
node index.js
\`\`\`

### Installation: 
_Describe how to Install your package_


## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

For more examples, please refer to the [Documentation] 


## Tests

Define a list of proposed unit tests/other test your program has gone thru

## Questions

List out any outstanding questions remaining. 


## Contributing

You can be part of contribution to open source community !
Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request


## Roadmap

Define a list of proposed features (and known issues).

<!-- LICENSE -->
## License

Distributed under the MIT License. See \`LICENSE\` for more information.

## Contact
_GitHub Username Email_: ${gitInfo.email}`
}


// Main Program
function init() {
    askQuestions();
}

init();
