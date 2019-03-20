#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const chalk = require('chalk');
const program = require('commander');

program
  .version(JSON.parse(fs.readFileSync(path.relative(__dirname, 'package.json'))).version)
  .arguments('<variable>')
  .action((variable) => {
    if (!process.env[variable]) {
      console.error(chalk.red(chalk.bold(`${variable}`) + ` is not defined.`));
      process.exit(1);
    }
  });

program.parse(process.argv);

