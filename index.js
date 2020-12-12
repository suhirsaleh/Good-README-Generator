// array of questions for user
const generateMarkdown = require("./utils/generateMarkdown");
const fs =  require("fs");
const path = require("path");
const inquirer = require('inquirer');
const questions = [




        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "describe",
            message: "Please describe your project."
        },
       
        {
            type: "input",
            name: "install",
            message: "What is needed for insalation?"
        },
        {
            type: "input",
            name: "usage",
            message: "What is is your project used for?"
        },
        // {
        //     type: "input",
        //     name: "licence",
        //     message: "What licences are needed to run your project?"
        // },
        {
            type: "input",
            name: "contribute",
            message: "Who contributed to this project?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your github username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "test",
            message: "What tests are needed?"
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license should your project have?",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },



];


// function to write README file
function writeToFile(fileName, data) {

    return  fs.writeFileSync (path.join (process.cwd (), fileName), data);

}

// function to initialize program
function init()
{

    inquirer.prompt(questions)
    .then(inquirerResponses =>{
    console.log("inquirerResponses: ", inquirerResponses)
    writeToFile("README.md", generateMarkdown ({...inquirerResponses}));

    });
};

// function to initilize an example.md
// fs.writeFile('Example.md', 'This is my text', function (err) {
//     if (err) throw err;
//     console.log('Results Received');
//     });
    

// function call to initialize program
init();