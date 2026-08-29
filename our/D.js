const NC = {
  x: 0,   // Axiom-Basis
  y: 0,   // Radius
  z: 0,   // Orbit
  t: 0,   // Tick

  tmpMap() {
    this.y = Math.sqrt(this.x*this.x + this.t);   // Radius
    this.z = Math.sin(this.t/10) * this.y;        // Orbit
  },

  axiom() {
    // Ableitung eines neuen Axioms aus den Daten
    return {
      ax: this.x + this.y,        // Beispiel: Kombination
      ay: this.y - this.z,        // Beispiel: Differenz
      az: (this.x + this.t) / 2   // Beispiel: Mittelwert
    };
  },

  run() {
    this.t++;
    this.x++;
    this.tmpMap();

    const A = this.axiom(); // Axiom-Ableitung
    console.log("NC:", this.x, this.y, this.z, this.t);
    console.log("Axiom:", A);
  }
};

setInterval(() => NC.run(), 1000);
