#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

async function count() {
  // taking paragraph from user input
  const userMess = await inquirer.prompt([
    {
      type: "string",
      name: "paragraph",
      message: chalk.red("Enter your paragraph:"),
    },
  ]);
  // select an options
  const userInput = await inquirer.prompt([
    {
      type: "list",
      name: "options",
      choices: ["word and letter count", "word count", "letter count", "exit"],
      message: "select any option:",
    },
  ]);

  // word function to get number of word in a paragraph
  function words(val: string) {
    const word: string[] = val.slice().split(" ");
    console.log(chalk.bgBlackBright("words:"));
    console.log(word);
    console.log(`The length of word is ${word.length}`);
  }

  // letter function to get number of letters in a paragraph
  function letters(val: string) {
    let letter: string[] = val.slice().split("");
    console.log(chalk.bgBlackBright("letter:"));
    console.log(letter);
    console.log(`The number of letters are ${letter.length}`);
  }

  // making decisions according to user options
  // when user select letter count and word count both
  if (userInput.options === "word and letter count") {
    console.log(chalk.bgBlueBright(userInput.options));
    words(userMess.paragraph);
    letters(userMess.paragraph);
  }
  // when user select the word count
  else if (userInput.options === "word count") {
    console.log(chalk.bgBlueBright(userInput.options));
    words(userMess.paragraph);
  } // when user select the letter count
  else if (userInput.options === "letter count") {
    console.log(chalk.bgBlueBright(userInput.options));
    letters(userMess.paragraph);
  } else {
    console.log("Good bye");
  }
}

await count();
