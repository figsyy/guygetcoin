const can = document.getElementById("game");
const ctx = can.getContext("2d");

function clear() {
  ctx.fillStyle = "#33a";
  ctx.fillRect(0, 0, 600, 600);
}

const coin = {
  name: "coin",
  x: 300,
  y: 300,
  rw: 20,
  rh: 25,
  fillStyle: "gold"
};

function drawcoin() {
  const { x, y, rw, rh, fillStyle } = coin;
  ctx.fillStyle = fillStyle;
  const path = new Path2D();
  path.ellipse(x, y, rw, rh, 0, 0, 2 * Math.PI);
  ctx.fill(path);
}

const guy = {
  name: "guy",
  x: 275,
  y: 400,
  w: 50,
  h: 50,
  fillStyle: "red"
};

function drawguy() {
  const { x, y, w, h, fillStyle } = guy;
  ctx.fillStyle = fillStyle;
  const path = new Path2D();
  path.rect(x, y, w, h);
  ctx.fill(path);
}

function moveguy(dx, dy) {
  guy.x += dx;
  guy.y += dy;
}

function draw() {
  clear();
  drawcoin();
  drawguy();
}
moveguy(35, 35);

draw();