'use strict';

(function () {

    var getDate = function () {
        return new Date();
    };

    zone.performanceZone = {
        startTime: undefined,
        elapsedTime: undefined,
        taskStart: undefined,
        taskElapsed: undefined,
        totalTaskTime: 0,
        maxTaskTime: undefined,
        totalTasks: 0,
        averageTaskTime: undefined,
        getReport: function () {
            return 'Zone report: ' + zone.totalTasks + ' total tasks\n' +
                'Average task time: ' + Math.floor(zone.averageTaskTime) + 'ms\n' +
                'Slowest task: ' + Math.floor(zone.maxTaskTime) + 'ms\n' +
                'Last task time: ' + Math.floor(zone.taskElapsed) + 'ms\n' +
                'Total elapsed time: ' + Math.floor(zone.elapsedTime/1000) + 's';
        },
        '-beforeTask': function () {
            if (zone.startTime === undefined) {
                zone.startTime = getDate();
            }
            zone.taskStart = getDate();
            zone.totalTasks += 1;
        },
        '+afterTask': function () {
            var curTime = getDate();
            zone.elapsedTime = curTime - zone.startTime;
            zone.taskElapsed = curTime - zone.taskStart;
            zone.totalTaskTime += zone.taskElapsed;
            zone.averageTaskTime = zone.totalTaskTime/zone.totalTasks;
            if (zone.maxTaskTime === undefined) {
                zone.maxTaskTime = zone.taskElapsed;
            }
            else if (zone.taskElapsed > zone.maxTaskTime) {
                zone.maxTaskTime = zone.taskElapsed;
            }
            console.log(zone.getReport());
        }
    };

})();

