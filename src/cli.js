import arg from 'arg';
import chalk from 'chalk';
import npmlog from 'npmlog';

function parseArgumentsIntoOptions() {
  const args = arg(
    {
      '--create': Boolean,
    }
  );

  let chosenCommand = args._[0];
  let skeletonType = args._[1];
  let validator = require('./validator.js');
  let commands = require('./commands.js');

  /**
   * Validate chosen command
   */
  try {
    validator.command(chosenCommand);
  } catch (err) {
    npmlog.warn('', chalk.red.bold(err.message));
    commands.list();
    process.exit(1);
  }

  /**
   * Validate skeleton
   */
  try {
    validator.skeleton(skeletonType);
  } catch (err) {
    npmlog.warn('', chalk.red.bold(err.message));
    process.exit(1);
  }

  return {
    skeleton: args._[1],
    command: args._[0],
  };
}

export function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  process.stdout.write(options);
}