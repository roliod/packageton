import arg from 'arg';
import chalk from 'chalk';

function parseArgumentsIntoOptions() {
  const args = arg(
    {
      '--create': Boolean,
    }
  );

  // let command = args._[0];
  let skeletonType = args._[1];
  let validator = require('./validator.js');

  try {
    validator.skeletons(skeletonType);
  } catch (err) {
    console.error(chalk.red.bold(err.message));
    process.exit(1);
  }

  return {
    skeleton: args._[1],
    command: args._[0],
  };
}

export function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  console.log(options);
}