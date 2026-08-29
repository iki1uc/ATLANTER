// T.js — uOUR Engine Extended

const uOUR = {
  h: 0,
  b: 0,
  t: 0,
  r: 1,
  orbit: 0,
  tick: 0,

  updateAxiom() {
    this.h++;
    this.b++;
    this.t++;
  },

  updateRadius() {
    this.r = Math.sqrt(this.h*this.h + this.b*this.b + this.t*this.t);
  },

  updateOrbit() {
    // Dämpfung
    this.orbit = Math.sin(this.tick / 10) * (this.r * 0.1);
  },

  matrix3x3() {
    return [
      [this.h, this.b, this.t],
      [this.r.toFixed(2), this.orbit.toFixed(2), this.tick],
      [this.h+this.b, this.b+this.t, this.t+this.h]
    ];
  },

  resetIfNeeded() {
    if (this.tick > 10000) {
      this.h = this.b = this.t = 0;
      this.tick = 0;
    }
  },

  operator() {
    console.log("T.js ENGINE TICK:", this.tick);
    console.table(this.matrix3x3());
  },

  run() {
    this.tick++;
    this.updateAxiom();
    this.updateRadius();
    this.updateOrbit();
    this.resetIfNeeded();
    this.operator();
  }
};

setInterval(() => uOUR.run(), 1000);
