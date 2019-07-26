'use strict'

exports.skeletons = function (type) {
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