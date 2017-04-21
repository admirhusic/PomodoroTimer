var seconds = 1500;
var timer = null;
var alarm = new Audio('assets/alarm_sound.mp3');
var render = document.querySelector("#timeRender");
var renderNumber = convertSecToMin(seconds);
render.innerHTML = renderNumber;


var pomodoro = 1500;
var short_break = 300;
var long_break = 900;


function switch_to_pomodoro() {

    clearInterval(timer);
    render.innerHTML = convertSecToMin(pomodoro);
    timer = null;
    seconds = pomodoro;
}

function switch_to_short_break() {

    clearInterval(timer);
    render.innerHTML = convertSecToMin(short_break);
    timer = null;
    seconds = short_break;
}

function switch_to_long_break() {

    clearInterval(timer);
    render.innerHTML = convertSecToMin(long_break);
    timer = null;
    seconds = long_break;
}




function convertSecToMin(s) {

    var min = Math.floor(s / 60);
    var sec = s % 60;

    if (min < 10) min = '0' + min;

    if (sec < 10) sec = '0' + sec;

    return min + ':' + sec
}


function startTimer() {

    if (timer !== null) return;
    timer = setInterval(function() {

        seconds--;
        render.innerHTML = convertSecToMin(seconds);
        if (seconds <= 0) {
            alarm.play();
            clearInterval(timer);
            timer = null;
        }

    }, 1000);

}


function stopTimer() {
    clearInterval(timer);
    timer = null;
}


function resetTimer() {
    clearInterval(timer);
    timer = null;
    seconds = 1500;
    render.innerHTML = convertSecToMin(seconds);
}