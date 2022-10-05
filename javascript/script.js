const hourSpan = document.getElementById("hour");
const minuteSpan = document.getElementById("minute");
const secondSpan = document.getElementById("second");
const amorpmSpan = document.getElementById("amorpm");

function changeTime(){
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    //console.log(hour,minutes,seconds);
    let amorpm;

    hourSpan.textContent = hour;
    minuteSpan.textContent = minute;
    secondSpan.textContent = second;

    if(hour >= 0 || hour <= 12){
        amorpm = "PM"

    }
    else {
        amorpm = "AM"
    }

    amorpmSpan.textContent = amorpm;

}


setInterval(changeTime, 1000)