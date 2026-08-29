const NC = {
  C: 0,   // Core
  R: 0,   // Radius
  O: 0,   // Orbit
  T: 0,   // Tick

  tmp() {
    this.R = Math.sqrt(this.C*this.C + this.T);
    this.O = Math.sin(this.T/10) * this.R;
  },

  axiom() {
    return {
      ax: this.C + this.R,
      ay: this.R - this.O,
      az: (this.C + this.T) / 2
    };
  },

  run() {
    this.T++;
    this.C++;
    this.tmp();

    const AX = this.axiom();
    console.log("NC:", this.C, this.R, this.O, this.T);
    console.log("AXIOM:", AX);
  }
};

setInterval(() => NC.run(), 1000);
