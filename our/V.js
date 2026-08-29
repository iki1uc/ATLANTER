// uOUR – ENGINE CORE
// Axiom3D + Orbit + Radius + Operator

const uOUR = {
  h: 0,   // Höhe
  b: 0,   // Breite
  t: 0,   // Tiefe
  r: 1,   // Radius
  orbit: 0, // Orbit-Resonanz
  tick: 0,  // Engine-Takt

  updateAxiom() {
    this.h++;
    this.b++;
    this.t++;
  },

  updateRadius() {
    this.r = Math.sqrt(this.h*this.h + this.b*this.b + this.t*this.t);
  },

  updateOrbit() {
    this.orbit = Math.sin(this.tick / 10) * this.r;
  },

  matrix3x3() {
    return [
      [this.h, this.b, this.t],
      [this.r, this.orbit, this.tick],
      [this.h+this.b, this.b+this.t, this.t+this.h]
    ];
  },

  operator() {
    console.log("uOUR‑ENGINE TICK:", this.tick);
    console.table(this.matrix3x3());
  },

  run() {
    this.tick++;
    this.updateAxiom();
    this.updateRadius();
    this.updateOrbit();
    this.operator();
  }
};

// ENGINE START
setInterval(() => uOUR.run(), 1000);
