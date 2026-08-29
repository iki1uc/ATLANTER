// ─── LIFE.js · S-LAYER + ATLANTER ────────────────────────────────

export const LIFE = {
  syn: 0,
  freund: 0,
  time: 0,
  quandt: 1,

  update() {
    this.time++;

    // SYN – reale Achse
    this.syn = Math.sin(this.time * 0.05);

    // FREUND – imaginäre Achse (90° versetzt)
    this.freund = this.syn *
      Math.sin(this.time * 0.7 + Math.PI / 2) *
      this.quandt;

    return {
      syn: this.syn,
      freund: this.freund,
      time: this.time,
      quandt: this.quandt
    };
  }
};
