const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const readmeGen = require('./utils/generateMarkdown');

//Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
init();

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, err => {
        if (err) throw err;
        console.log('Readme Created!');
    })
}

function getInfoCreateReadme() {
    inquirer.prompt([{
                type: 'input',
                message: 'Enter your first and last name:',
                name: 'name'
            },
            {
                type: 'input',
                message: 'Enter the name of your project:',
                name: 'projectName',
            },
            {
                type: 'editor',
                message: 'Enter a description for your project:',
                name: 'description',
            },
            {
                type: 'editor',
                message: 'What are the steps required to install your project?',
                name: 'installation',
            },
            {
                type: 'editor',
                message: 'Enter instructions for how to use your project:',
                name: 'usage',
            },
            {
                type: 'editor',
                message: 'List your collaborators, if any, with links to their GitHub profiles. ',
                name: 'credits',
            },
            {
                type: 'list',
                name: 'license',
                message: 'What lisicense do you have for this project:',
                choices: ['MIT', 'GPLv2', 'GPLv3', 'Apache', 'BSD 3-clause', 'BSD 2-clause']
            },
            {
                type: 'editor',
                message: 'List instructions explaining how others can contribute to your project:',
                name: 'contributing'
            },
            {
                type: 'editor',
                message: 'Enter any tests you may have for the project ',
                name: 'tests'
            },
            {
                type: 'input',
                message: 'Enter your github username:',
                name: 'githubUsername'
            },
            {
                type: 'input',
                message: 'Enter your email address:',
                name: 'email'
            },
            {
                type: 'editor',
                message: 'Enter instructions on how to contact you:',
                name: 'howToContact'
            }

        ])
        .then((response) => {
            const liscenseInfo = getBadgeAndLink(response.license);
            const doc = generateMarkdown(response, liscenseInfo);
            writeToFile('README.md', doc);
        });
}

function getBadgeAndLink(liscense) {
    let liscenseObject = {
        badge: '',
        link: ''
    };

    switch (liscense) {
        case 'MIT':
            liscenseObject.badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
            liscenseObject.link = 'https://opensource.org/licenses/MIT';
            return liscenseObject;
        case 'GPLv2':
            liscenseObject.badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
            liscenseObject.link = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
            return liscenseObject;
        case 'GPLv3':
            liscenseObject.badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            liscenseObject.link = 'https://www.gnu.org/licenses/gpl-3.0'
            return liscenseObject;
        case 'Apache':
            liscenseObject.badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            liscenseObject.link = 'https://opensource.org/licenses/Apache-2.0';
            return liscenseObject;
        case 'BSD 3-clause':
            liscenseObject.badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
            liscenseObject.link = 'https://opensource.org/licenses/BSD-3-Clause';
            return liscenseObject;
        case 'BSD 2-clause':
            liscenseObject.badge = '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
            liscenseObject.link = 'https://opensource.org/licenses/BSD-2-Clause';
            return liscenseObject;
    }
}

// function to initialize program
function init() {
    getInfoCreateReadme();
}

// function call to initialize program