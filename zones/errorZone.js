'use strict';

zone.errorZone = {
    stacks: [],
    enqueueTask: function () {
        try {
            throw new Error('Task Enqueue');
        }
        catch (e) {
            zone.stacks.push(e.stack);
        }
    },
    onError: function (e) {
        var idx, stack;
        console.error('Error: ' + e);
        while (stack = zone.stacks.pop()) {
            console.warn(stack);
        }
    }
};