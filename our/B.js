// B.js – SLAVE für uOUR ↔ OURu

import { A } from "./A.js";

export const B = {

  NAME: "B",
  TICK: 0,
  VALUE: 0,
  RADIUS: 0,
  ORBIT: 0,

  calc() {
    this.TICK++;
    this.VALUE++;

    // TMP-kompatible Orbit-Berechnung
    this.RADIUS = Math.sqrt(this.VALUE * this.VALUE + this.TICK);
    this.ORBIT = Math.sin(this.TICK / 10) * this.RADIUS;
  },

  run() {
    this.calc();
    console.log("B:", this.VALUE, this.RADIUS, this.ORBIT, this.TICK);
  }
};

setInterval(() => B.run(), 1000);
