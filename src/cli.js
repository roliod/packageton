import arg from 'arg';

function parseArgumentsIntoOptions(rawArgs) {
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