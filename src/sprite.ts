export type Sprite = {
  name: string;
  x: number;
  y: number;
  w: number;
  h: number;
  shape: "ellipse" | "rect";
  fillStyle: string | CanvasGradient | CanvasPattern;
};

export function drawsprite(ctx: CanvasRenderingContext2D, s: Sprite) {
  const { x, y, w, h, shape, fillStyle } = s;
  ctx.fillStyle = fillStyle;
  const path = new Path2D();
  switch (shape) {
    case "ellipse":
      path.ellipse(x - w / 2, y - h / 2, w / 2, h / 2, 0, 0, 2 * Math.PI);
      break;
    case "rect":
      path.rect(x - w / 2, y - h / 2, w, h);
      break;
  }
  ctx.fill(path);
}

export function drawsprites(ctx: CanvasRenderingContext2D, sprites: Sprite[]) {
  for (const s of sprites) {
    drawsprite(ctx, s);
  }
}

export function movesprite(sprite: Sprite, dx: number, dy: number) {
  sprite.x += dx;
  sprite.y += dy;
}
