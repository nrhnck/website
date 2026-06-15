function updateTime() {
    const now = new Date();

    document.getElementById("time").textContent =
        "My Time: " + now.toLocaleTimeString("en-US", {
            timeZone: "America/New_York",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
}

updateTime();
setInterval(updateTime, 1000);
