'use strict';

zone.pointlessZone = {
    $afterTask: function (parent) {
        return function afterTask() {
            console.log('I run before my parent.');
            parent();
            console.log('I run after my parent.');
        }
    }
};