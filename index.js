const can = document.getElementById("game");
const ctx = can.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(275, 400, 50, 50);

ctx.fillStyle = "gold";

const circle = new Path2D();
circle.ellipse(300, 300, 20, 25, 0, 0, 2*Math.PI)
ctx.fill(circle)