#!/usr/bin/env node

const program = require('commander');
const pjson = require('../package.json');

program
  .version(pjson.version);

program
  .command('create <skeleton>')
  .description('create a new package skeleton.')
  .action((skeleton) => {
    let chalk = require('chalk');
    let logSymbols = require('log-symbols');
    let validator = require('./validator.js');
    let create = require('./commands/create.js');
    /**
     * Validate chosen command and then route to executor.
     */
    try {
      validator.skeleton(skeleton);
      create.skeleton(skeleton);
    } catch (err) {
      console.error(
        logSymbols.error, 
        chalk.red(err.message)
      )
    }
  });

  program
  .command('list')
  .description('list all available skeletons.')
  .action(() => {
    let list = require('./commands/list.js');
    list.all();
  });

program.parse(process.argv);