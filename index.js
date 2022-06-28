const can = document.getElementById("game");
const ctx = can.getContext("2d");

function clear() {
  ctx.clearRect(0, 0, can.width, can.height);
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

function movecoin(dx, dy) {
  coin.x += dx;
  coin.y += dy;
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
  checkkeys();
  window.requestAnimationFrame(draw);
}

const downKeys = new Set();

function keydown(e) {
  downKeys.add(e.key);
}
function keyup(e) {
  downKeys.delete(e.key);
}

window.addEventListener("keydown", keydown, false);
window.addEventListener("keyup", keyup, false);
window.requestAnimationFrame(draw);

function checkkeys() {
  const speed = 1;
  for (const key of downKeys) {
    switch (key) {
      case "w":
        moveguy(0, -speed);
        break;
      case "a":
        moveguy(-speed, 0);
        break;
      case "s":
        moveguy(0, speed);
        break;
      case "d":
        moveguy(speed, 0);
        break;
      case "ArrowUp":
        movecoin(0, -speed);
        break;
      case "ArrowLeft":
        movecoin(-speed, 0);
        break;
      case "ArrowDown":
        movecoin(0, speed);
        break;
      case "ArrowRight":
        movecoin(speed, 0);
        break;
    }
  }
}
