import arg from 'arg';
import config from '../config.json';

function parseArgumentsIntoOptions(rawArgs) {
  console.log(JSON.parse(config));
  const args = arg(
  {
    '--create': Boolean,
  }
  );
  return {
    skeleton: args._[1],
    command: args._[0],
  };
}

export function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  console.log(options);
}