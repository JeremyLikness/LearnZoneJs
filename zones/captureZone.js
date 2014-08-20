'use strict';

zone.captureZone = {
    captures: [],
    callbacks: [],
    register: function (fn) {
        zone.callbacks.push(fn);
    },
    release: function () {
        var idx, timeoutFn;
        while (timeoutFn = zone.captures.pop()) {
            timeoutFn();
        }
        console.log('Released captured timeouts.');
    },
    onZoneCreated: function () {
        console.log('Capture zone was created.');
    },
    setTimeout: function (fn) {
        var idx;
        console.log('Captured a timeout.');
        zone.captures.push(fn);
        for (idx = 0; idx < zone.callbacks.length; idx += 1) {
            zone.callbacks[idx]();
        }
    }
};