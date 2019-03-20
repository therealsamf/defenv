#!/usr/bin/env node

const chalk = require('chalk');
const program = require('commander');

program
  .version('0.0.1')
  .arguments('<variable>')
  .action((variable) => {
    if (!process.env[variable]) {
      console.error(chalk.red(chalk.bold(`${variable}`) + ` is not defined.`));
      process.exit(1);
    }
  });

program.parse(process.argv);

