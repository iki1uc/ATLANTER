const NC = {
  C: 0, D: 0, E: 0, F: 0,
  G: 0, H: 0, J: 0, K: 0,
  L: 0, M: 0, N: 0, P: 0,

  T: 0, // Tick bleibt separat

  tmp() {
    this.D = Math.sqrt(this.C*this.C + this.T);
    this.E = Math.sin(this.T/10) * this.D;
  },

  axiom() {
    return {
      ax: this.C + this.D,
      ay: this.D - this.E,
      az: (this.C + this.T) / 2
    };
  },

  run() {
    this.T++;
    this.C++;
    this.tmp();

    console.log("NC:", this.C, this.D, this.E, this.T);
    console.log("AXIOM:", this.axiom());
  }
};

setInterval(() => NC.run(), 1000);
