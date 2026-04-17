let redirectTimeoutId;

function startTimer() {
    if (redirectTimeoutId) {
        window.clearTimeout(redirectTimeoutId);
    }
    redirectTimeoutId = window.setTimeout(redirectToHomepage, 60000);
}

function redirectToHomepage() {
    window.location.href = '../index.html';
}
window.addEventListener('click', function() { 
    console.log("Activity detected. Resetting timer...");
    startTimer();
}, true);

startTimer();
