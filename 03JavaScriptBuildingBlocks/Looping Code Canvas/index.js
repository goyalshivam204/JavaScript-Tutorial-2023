const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");


const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    // console.log(document.documentElement.clientWidth);
    // console.log(document.documentElement.clientHeight);
    // canvas.width = 500;
    // canvas.height = 400;
})


function random(number) {
  return Math.floor(Math.random() * number);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 1000; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.arc(
      random(canvas.width),
      random(canvas.height),
      random(50),
      Math.PI,
      2 * Math.PI
    );
    ctx.fill();
  }
}

btn.addEventListener("click", draw);
