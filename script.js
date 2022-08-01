const dueDate = '14 Aug 2022';
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


function countdown() {
    const finalDate = new Date(dueDate);
    const currentDate = new Date();

    const remainingSeconds = (finalDate - currentDate) / 1000;

    const days = Math.floor(remainingSeconds / 3600 / 24);
    const hours = Math.floor(remainingSeconds / 3600) % 24;
    const minutes = Math.floor(remainingSeconds / 60) % 60;
    const seconds = Math.floor(remainingSeconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);