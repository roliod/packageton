/**
 * List all available skeletons.
 * 
 * @returns void
 */
exports.all = function () {
    let skeletons = require('../config/skeletons.json');
    let skeletonList = skeletons.list;
    
    console.log('Available skeletons:');

    let counter = 0;
    for (let language in skeletonList) {
        let index = counter + 1;
        console.log(index + '. ' + language);
        counter++;
    }
}
