var min = 00;
var sec = 00;
var msec = 00;
var interval;

var minutes = document.getElementById("minute");
var seconds = document.getElementById("second");
var miliseconds = document.getElementById("mili_second");

function stopWatch(){
    msec++;
    miliseconds.innerHTML = msec;
    if(msec >= 100){
        sec++;
        seconds.innerHTML = sec;
        msec = 0;
    }
    else if(sec >= 60){
        min++;
        sec = 0;
        minutes.innerHTML = min;
    }
    
}


//start
function start_timer(){
    interval = setInterval(stopWatch, 10);
    var startbtn = document.getElementById("start");
    startbtn.disabled = true;
    var pausebtn = document.getElementById("pause");
    pausebtn.disabled = false;
}

//pause
function pause_timer(){
    clearInterval(interval);
    var startbtn = document.getElementById("start");
    startbtn.disabled = false;
    var pausebtn = document.getElementById("pause");
    pausebtn.disabled = true;
}

//reset
function reset_timer(){
    min = 0;
    sec = 0;
    msec = 0;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    miliseconds.innerHTML = msec;
    pause();
}