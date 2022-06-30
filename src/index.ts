import { checkkeys } from "./input";
import { Player } from "./player";
import { drawsprites, Sprite } from "./sprite";

const can = document.getElementById("game") as HTMLCanvasElement;
const ctx = can.getContext("2d")!;

function clear() {
  ctx.clearRect(0, 0, can.width, can.height);
}

const coin: Player = {
  name: "coin",
  shape: "ellipse",
  x: 300,
  y: 300,
  w: 40,
  h: 50,
  speed: 1.5,
  fillStyle: "gold",
  keys: ["ArrowUp", "ArrowLeft", "ArrowRight", "ArrowDown"]
};

const guy: Player = {
  name: "guy",
  shape: "rect",
  x: 275,
  y: 400,
  w: 50,
  h: 50,
  speed: 1,
  fillStyle: "red",
  keys: ["w", "a", "s", "d"]
};

const floor: Sprite = {
  name: "floor",
  shape: "rect",
  x: 300,
  y: 550,
  w: 600,
  h: 10,
  fillStyle: "brown"
};

const players = [coin, guy];
const sprites = [floor, ...players];

function draw() {
  clear();
  drawsprites(ctx, sprites);
  checkkeys(players);
  window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);
