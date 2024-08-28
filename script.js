window.addEventListener("load", () => {
    function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const formattedTime = `${hours}:${minutes}:${seconds}`;
        document.getElementById("clock").textContent = formattedTime;
    }
    setInterval(updateClock, 1000);
    updateClock();
});
