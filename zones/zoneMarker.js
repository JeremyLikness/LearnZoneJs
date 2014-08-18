'use strict';

zone.zoneMarker = {
    mark: 'Unknown',
    afterTask: function () {
        console.log('Exited task ' + zone.mark);
        zone.mark = 'Unknown';
    }
};
