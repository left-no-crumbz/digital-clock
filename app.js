function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const time = document.getElementById("time");
    time.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(getTime, 1000);



