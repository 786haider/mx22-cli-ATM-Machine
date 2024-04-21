#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000; //DOLLAR
let myPin = 12345; //Pin Code
console.log(chalk.yellow.bold.italic("Wellcome Dear User"));
let pinAwnser = await inquirer.prompt([
    {
        name: "pin",
        message: (chalk.green.bold.italic("Enter Your Pin")),
        type: "number"
    }
]);
if (pinAwnser.pin === myPin) {
    console.log(chalk.blue.bold.italic("Correct pin code"));
}
else {
    console.log(chalk.red.bold.italic("Incorrect pin code"));
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: (chalk.yellow.bold.italic("What do you want")),
        type: "list",
        choices: ["Withdraw", "Deposite", "Check Balance"]
    }
]);
if (operationAns.operation === "Withdraw") {
    let amount = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter your amount",
            type: "number",
        }
    ]);
    myBalance -= amount.amount;
    console.log(chalk.green.bold.italic("Your remaining balance is : " + myBalance));
}
else {
    console.log("Please enter a sufficient amount");
}
if (operationAns.operation === "Deposite") {
    let amount = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter your amount",
            type: "number",
        }
    ]);
    myBalance += amount.amount;
    console.log(chalk.green.bold.italic("Your remaining balance is : " + myBalance));
}
if (operationAns.operation === "Check Balance") {
    console.log(chalk.green.bold.italic("Your balance is", myBalance));
}
