
const time = document.getElementById("time");
const divHours = document.getElementById("hours");
const divMinutes = document.getElementById("minutes");
const divSeconds = document.getElementById("seconds");
const divPeriod = document.getElementById("period");
const divDate = document.getElementById("date");
const divDay = document.getElementById("day");

function getDay() {
    const date = new Date();
    const weekDay = date.getDay();
    switch (weekDay) {
        case 0: return "MONDAY";    
        case 1: return "TUESDAY";    
        case 2: return "WEDNESDAY";    
        case 3: return "THURSDAY";    
        case 4: return "FRIDAY";    
        case 5: return "SATURDAY";    
        case 6: return "SUNDAY";    
    }
}
function getMonth() {
    const date = new Date();
    const month = date.getMonth();
    switch(month) {
        case 0: return "January";
        case 1: return "February"
        case 2: return "March";
        case 3: return "April";
        case 4: return "May";
        case 5: return "June";
        case 6: return "July";
        case 7: return "August";
        case 8: return "September"
        case 9: return "October";
        case 10: return "November";
        case 11: return "December";
    }

}

function getTime() {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const period = hours >= 12 ? "PM" : "AM"
    const month = getMonth();
    const dayNum = date.getDate();
    const year = date.getFullYear();
    const weekDay = getDay();
    hours = hours % 12;
    hours = hours ? hours : 12;
    const padHours = String(hours).padStart(2, "0");
    const padMinutes = String(minutes).padStart(2, "0");
    const padSeconds = String(seconds).padStart(2, "0");
    divHours.textContent = `${padHours}:`;
    divMinutes.textContent = `${padMinutes}`;
    divSeconds.textContent = `${padSeconds}`;
    divPeriod.textContent = `${period}`;
    divDate.textContent = `${month} ${dayNum} ${year}`;
    divDay.textContent = `${weekDay}`;
}

setInterval(getTime, 1000);



