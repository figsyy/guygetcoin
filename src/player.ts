import { Sprite } from "./sprite";

export type Player = Sprite & {
  speed: number;
  keys: string[];
};
