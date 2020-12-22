// console.log("i am live");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");



const newYear = "1 jan 2022";

let countdown = ()=> {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    
    const totalSecond = (newYearDate - currentDate)/1000;
    const days = Math.floor(totalSecond/3600/24);
    const hours = Math.floor(totalSecond/3600)%24;
    const minutes = Math.floor(totalSecond/60)%60;
    const seconds = Math.floor(totalSecond)%60;
    console.log(days,hours,minutes,seconds);
    
    daysEl.innerHTML= days;
    hoursEl.innerHTML=format(hours) ;
    minsEl.innerHTML=format(minutes) ;
    secondsEl.innerHTML= format(seconds) ;
    
}

let format = (time)=>{
    if(time<10){
        return `0${time}`
    }else{
        return time;
    }
}

setInterval(() => {
    countdown()
}, 1000);


