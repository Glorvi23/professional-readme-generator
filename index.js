// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
//const generateHtml = require("./utils/generateMarkdown");

const arrayOfQuestion = [{
        type: "input",
        message: "What is your the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description"
    },
    {
        type: "input",
        message: "What are the instructions on how to install in order for others to use the project?",
        name: "install"
    },
    {
        type: "input",
        message: "Name of the image in your assets folder?",
        name: "usage"
    },
    {
        type: "list",
        message: "Which license do you want to use?",
        name: "license",
        choices: [
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
            "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
            "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)",
            "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
        ]
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "gitHub"
    },
];



const generateHtml = function ({
    title,
    description,
    install,
    usage,
    license,
    email,
    gitHub
}) {
    const htmlStringToWriteToFile = `
# ${title}
${license}

## Description

${description}

## Table of Contents

- [Installation](#installation) 
- [Usage](#usage) 
- [Credits](#credits) 
- [License](#license)

## Installation

${install}

## Usage

![Weather - Dashboard](assets/images/${usage}.png) 


## Credits

The following people helped contribute to the project: 



## License
${license}

MIT License

Copyright (c) [2021] [Caleb Glorvigen]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Contributing

## Tests

## Questions
GitHub Repository: [${gitHub}](https://github.com/${gitHub}/)

You can reach me at the following email address: ${email}

    `;
    return htmlStringToWriteToFile;
};


async function init() {
    try {
        const response = await inquirer.prompt(arrayOfQuestion);

        console.log(response);

        const dynamicString = generateHtml(response);

        // WRITE AN HTML FILE
        fs.writeFile("generated.md", dynamicString, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("Successfully generated HTML file.");
            }
        });
    } catch (err) {
        console.log(err);
    }
}

// Function call to initialize app
init();