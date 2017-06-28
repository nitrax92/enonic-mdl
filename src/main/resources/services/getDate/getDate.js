/**
 * Created by Martin on 6/27/2017.
 */

var count = 0;

exports.get = function(req) {
    var date = new Date();


    var day = date.getDate();
    var year = date.getFullYear();
    var minutes = date.getMinutes();
    var hour = date.getHours();

    var dateString = getMonthName(date.getMonth()) + " " + day + ", " + year;

    if(minutes < 10) {
        minutes = '0' + minutes
    }

    var time = hour + ":" + minutes;
    count++;
    log.info("Service Running.....");
    return {
        body: {
            date: dateString,
            time: time,
            count: count,
        },
        contentType: 'application/json'
    };

    function getMonthName(monthNum) {
        var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

        return months[monthNum];
    }
};


