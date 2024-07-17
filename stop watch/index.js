let interval = null;
const time = document.getElementById("time");
let secondselapsed = 50;

function padstart(value){
    return String(value).padStart(2,"0")
}
function settime(){
    const minutes = Math.floor(secondselapsed/60);
    const seconds = secondselapsed % 60;
    time.innerHTML = `${padstart(minutes)}:${padstart(seconds)}`;
}
function timer(){
    secondselapsed++;
    settime();
}


function startt(){
    if(interval) stopt();
    interval = setInterval(timer,1000);
}
function stopt(){
    clearInterval(interval);
}
function reset(){
    stopt();
    secondselapsed=0;
    settime();
}




