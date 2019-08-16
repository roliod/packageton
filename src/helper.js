import util from 'util';
import chalk from 'chalk';
import figlet from 'figlet';

/**
 * Compose default message.
 * Usually contains the list of commands and how they are used.
 * 
 * @returns void
 */
exports.defaultMessage = function() {
    let packagetonText = figlet.textSync('Packageton', {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    });

    constructCommandList();

    console.log(
        packagetonText + '\n',
        chalk.yellow('Usage:') + '\n',
        constructUsage() + '\n',
        '\n',
        chalk.yellow('Available commands:') + '\n'
      );
}
