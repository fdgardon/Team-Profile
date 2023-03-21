const inquirer = require("inquirer");

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager");
const generateHtmlFile = require("./src/index.html")

const employee= []


const fs = require("fs");
manager();

function manager(){
  inquirer.prompt (
    [
      {
        type: "input",
        name: "name",
        message: "What is the Manager name?"
      },
      {
        type: "input",
        name: "id",
        message: "What is the Manager ID?"
      },
      {
        type: "input",
        name: "officenumber",
        message: "What is the Manager Office number?"
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager Email address?"
      },
      
    ]
  ).then(function(answers){
    const manager = new Manager (answers.name, answers.id, answers.email, answers.officenumber)
    employee.push(manager)
    return askForAdding()
  }) 
}; 

function askForAdding(){
  inquirer.prompt(
    [
      {
        type: "list",
        name: "option",
        message: "Do you want to add more employee?",
        choices: ["Add more team member", "generateHtmlFile"]
      }
    ]
  ).then(ans=>engineer())
}

function engineer(){
  inquirer.prompt (
    [
      {
        type: "input",
        name: "name",
        message: "What is the Engineer name?"
      },
      {
        type: "input",
        name: "id",
        message: "What is the Engineer ID?"
      },
      {
        type: "input",
        name: "gitHub",
        message: "What is the Engineer GitHub address?"
      },
      {
        type: "input",
        name: "email",
        message: "What is the Engineer Email address?"
      },
      
    ]
  ).then(function(answers){
    const engineer = new Engineer (answers.name, answers.id, answers.email, answers.gitHub)
    employee.push(engineer)
    intern()

  })

};

function intern(){
  inquirer.prompt(
    [
      {
        type: "input",
        name: "name",
        message: "What is the intern name?"
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern ID?"
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern school?"
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern Email address?"
      },
    ]
    ).then(function(answers){
      const intern = new Intern (answers.name, answers.id, answers.school, answers.email)
      employee.push(intern)
    })
    .then(writeToFile("team.html", generateHtmlFile(employee)))
}

function writeToFile(fileName, array){
  fs.writeFileSync("team.html", generateHtmlFile(employee),)
};


