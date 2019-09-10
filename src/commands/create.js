let shell = require('shelljs');
let logSymbols = require('log-symbols');
let skeletons = require('../config/skeletons');

/**
 * Create a package skeleton for a specific language.
 * 
 * @param string skeleton
 * @param mixed name
 * 
 * @returns void
 */
exports.skeleton = function (skeleton) {
    let folderName = skeleton + '-skeleton';

    let skeletonList = skeletons.list;
    let repo = skeletonList[skeleton].repo;

    shell.exec('git clone ' + repo + ' ' + folderName);
    shell.rm('-rf', './' + folderName + '/.git');

    console.log(logSymbols.success, 'Done');
}