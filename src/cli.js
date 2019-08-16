#!/usr/bin/env node

const program = require('commander');

program
  .version('1.0.0');

program
  .command('create <skeleton>')
  .description('create a new package skeleton.')
  .action((skeleton) => {
    let validator = require('./validator.js');
    /**
     * Validate chosen command and then route to executor.
     */
    try {
      validator.skeleton(skeleton);
      // router.commandExecutor(skeleton);
      console.log(skeleton);
      process.exit(1);
    } catch (err) {
      console.log(err.message)
      process.exit(1);
    }
  });

  program
  .command('list')
  .description('list all available skeletons.')
  .action(() => {

  });

program.parse(process.argv);