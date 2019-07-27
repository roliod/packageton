'use strict'

/**
 * List all commmands with there respective description.
 * 
 * @returns string
 */
exports.list = function () {
    let commands = require('./config/commands.json');
    /**
     * @todo fix command list output
     */
    console.table(commands.list);
}