'use strict';

zone.redirectAlertZone = {
    lastAlert: undefined,
    alert: function (msg) {
        console.log('Alerts are annoying. This is what I captured: ' + msg);
        zone.lastAlert = msg;
    }
};
