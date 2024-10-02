const endDate = "01 JANUARY 2024 00:00:00 AM";
const inputs = document.querySelectorAll("input")


const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now ) / 1000;

    if(diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24); // days value putting in days container direct from js
    inputs[1].value = Math.floor(diff / 3600) % 24; // Hours value putting in days container direct from js
    inputs[2].value = Math.floor(diff / 60 ) % 60; // Minutes value putting in days container direct from js
    inputs[3].value = Math.floor(diff) % 60; // Seconds value putting in days container direct from js

}


clock();

setInterval(
    () => {
        clock()
    },
    1000
)
