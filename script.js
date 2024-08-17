function updateCountdown() {
    const targetDate = new Date('2024-08-19T12:00:00');
    const now = new Date();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = difference % 1000;

    const formattedTime = `${days}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;

    document.getElementById('timer').textContent = formattedTime;

    if (difference < 0) {
        clearInterval(interval);
        document.getElementById('timer').textContent = "00:00:00:00.000";
    }
}

const interval = setInterval(updateCountdown, 5);
updateCountdown();
