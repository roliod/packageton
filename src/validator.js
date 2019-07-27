'use strict'

/**
 * Validate a skeletons existence
 *
 * @param string type
 * 
 * @returns bool
 * 
 * @throws Error
 */
exports.skeleton = function (type) {
    let skeletonConfig = require('./config/skeletons.json');
    let availableSkeletons = Object.keys(skeletonConfig.list);
    let skeletonIsAvailable = availableSkeletons.includes(type);

    if (skeletonIsAvailable === false) {
        throw new Error(
            'We currently do not have support for `' + type + '`'
        );
    }

    return true;
}

/**
 * Validate a commands existence
 *
 * @param string type
 * 
 * @returns bool
 * 
 * @throws Error
 */
exports.command = function (commandName) {
    let commandConfig = require('./config/commands.json');
    let availableCommands = Object.keys(commandConfig.list);
    let commandExists = availableCommands.includes(commandName);

    if (commandExists === false) {
        throw new Error(
            'Command `' + commandName + '` does not exist'
        );
    }

    return true;
}