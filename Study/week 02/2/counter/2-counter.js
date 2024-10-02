// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. use setTimeout instead
let count = 0;

function incrementCounter() {
  count++;
  console.log(count);
  setTimeout(incrementCounter, 1000);
}

setTimeout(incrementCounter, 1000);
