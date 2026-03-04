function updateTime(){
    const now = new Date();
document.getElementById("time").textContent =
"Local Time: " + now.toLocaleTimeString();

}
setInterval(updateTime, 1000);
