/* Modified from: https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies */

var deadline = 'Febuary 8 2018 14:45:00';
function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime){
    var clock = document.getElementById(id);
    function updateClock(){
        var t = getTimeRemaining(endtime);
        clock.innerHTML = t.days + 'd:' +
                          t.hours + 'h:' +
                          t.minutes + 'm:' +
                          t.seconds + 's';
        if(t.total<=0){
            clearInterval(timeinterval);
        }
    }
    updateClock();
    var timeinterval = setInterval(updateClock,1000);
}

initializeClock('time_count', deadline);

/*
var clock = document.getElementById('time_count');
clock.innerHTML = "muhaha im an alien";
*/
