'use strict';

zone.beforeZone = {
    '-afterTask': function () { // use + to run after
        console.log('I am shorthand for running before my parent.');
    }
};
