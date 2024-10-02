// try to code a counter in Javascript It should go up as time goes by in intervals of 1 second

let count = 0;

function incrementCounter() {
    count++;
    console.log(count);
}

setInterval(incrementCounter, 1000);