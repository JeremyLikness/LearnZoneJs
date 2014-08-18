'use strict';

zone.myZone = {
    stacks: [],
    mark: 'Unknown',
    enqueueTask: function () {
        try {
            throw new Error('Task Enqueue');
        }
        catch (e) {
            zone.stacks.push(e.stack);
        }
    },
    afterTask: function () {
        console.log('Exited task ' + zone.mark);
        zone.mark = 'Unknown';
    },
    onError: function (e) {
        var idx, stack;
        console.error('Error: ' + e);
        while (stack = zone.stacks.pop()) {
            console.warn(stack);
        }
    }
};
