// class Rectangle {
//   constructor(width, height, color) {
//     this.width = width;
//     this.height = height;
//     this.color = color;
//   }

//   area() {
//     return "Area Of Rectangle Is: " + this.width * this.height;
//   }

//   paint() {
//     return "We Colored Our Rectangle With: " + this.color;
//   }
// }

// const rect1 = new Rectangle(12, 8, "white");
// console.log(rect1.area());
// console.log(rect1.paint());

// function random(resolve) {
//   resolve();
// }

// let p = new Promise(random);

// function randomThen() {
//   console.log("Then function called!");
// }

// p.then(randomThen);

// try to code a counter in Javascript It should go up as time goes by in intervals of 1 second

let count = 0;

function incrementCounter() {
    count++;
    console.log(count);
}

setInterval(incrementCounter, 1000);