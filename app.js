

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const padHours = String(hours).padStart(2, "0");
    const padMinutes = String(minutes).padStart(2, "0");
    const padSeconds = String(seconds).padStart(2, "0");
    const time = document.getElementById("time");
    time.textContent = `${padHours} : ${padMinutes} : ${padSeconds}`;
}

setInterval(getTime, 1000);



