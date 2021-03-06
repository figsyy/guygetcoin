import { Player } from "./player";
import { movesprite } from "./sprite";

const downKeys = new Set<string>();
window.addEventListener("keydown", e => downKeys.add(e.key), false);
window.addEventListener("keyup", e => downKeys.delete(e.key), false);

const dirs = [
  [0, -1], // up,
  [-1, 0], // left
  [1, 0], // right
  [0, 1] // down
];

export function checkkeys(players: Player[]) {
  for (const player of players) {
    for (let dir = 0; dir < dirs.length; dir++) {
      if (downKeys.has(player.keys[dir])) {
        const [dx, dy] = dirs[dir];
        movesprite(player, dx * player.speed, dy * player.speed);
      }
    }
  }
}
