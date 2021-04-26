const dayBD = document.getElementById("days");
const hourBD = document.getElementById("hours");
const minBD = document.getElementById("mins");
const secBD = document.getElementById("seconds");


const birthday ='24 May 2021';

function countdown(){ 
    const birthdayDate = new Date(birthday);
    const currentDate = new Date(); 

    const totalseconds=(birthdayDate - currentDate) /1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const Hours = Math.floor(totalseconds / 3600 ) %24;
    const Minutes=Math.floor(totalseconds/ 60 ) %60;
    const Seconds=Math.floor(totalseconds) % 60;

      dayBD.innerHTML = days;
      hourBD.innerHTML = formatTime(Hours);
      minBD.innerHTML = formatTime(Minutes);
      secBD.innerHTML = formatTime(Seconds);
}
function formatTime(time){
    return time < 10 ?`0${time}`: time;
}
countdown();

//initial call
setInterval(countdown,1000);

