// Get necessary elements
const display = document.querySelector('.display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let timer; // To store the setInterval reference
let time = 0; // Timer variable, represents time in seconds
let running = false; // Flag to track if the timer is running

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {
    stopTimer();
    time = 0;
    display.textContent = formatTime(time);
}

function updateTimer() {
    time++;
    display.textContent = formatTime(time);
}

function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return (
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds
    );
}

// Event listeners for buttons
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);