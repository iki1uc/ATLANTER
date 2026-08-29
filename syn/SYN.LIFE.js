// ─── SYN.LIFE.js · LEBEN BEI S · TMP-geführt · 6D ────────────

const SYN = {
  // ─── KERN ──────────────────────────────────────────────────
  state: "LIVING",
  pulse: 0,
  heartbeat: 0,
  axis: [3, 9, 27, 81, 243, 756],
  earn: 0,

  // ─── LEBENSPARAMETER ──────────────────────────────────────
  life: {
    atmen: true,
    schlag: 0,
    fluss: 0,
    tiefe: 0,
    wach: true,
    synapsen: 0
  },

  // ─── PUMPE ──────────────────────────────────────────────────
  pump() {
    this.heartbeat++;
    this.pulse = Math.sin(this.heartbeat * 0.05) * 0.5 + 0.5;
    this.life.schlag = this.pulse * 100;
    this.life.fluss = this.pulse * 80 + 20;
    this.life.tiefe = this.pulse * 60 + 20;
    this.life.synapsen = this.heartbeat * 0.1;
    this.earn += this.pulse * 0.1;
    return this;
  },

  // ─── ACHSEN-TRANSFORMATION ──────────────────────────────────
  transform() {
    return this.axis.map((a, i) => ({
      axis: a,
      value: a * (0.5 + 0.5 * Math.sin(this.heartbeat * 0.03 + i * 0.7)),
      leben: a * this.pulse,
      syn: a * this.life.synapsen
    }));
  },

  // ─── EARN-ATTIKULATION (gegen die Wand) ──────────────────
  earnAttack() {
    const earned = this.earn;
    const lifeScore = this.life.schlag * this.life.fluss / 100;

    return {
      earn: earned,
      lifeScore: lifeScore,
      status: lifeScore > 50 ? "LEBENDIG" : "SCHWEBEND",
      message: lifeScore > 50
        ? "🌀 LEBEN BEI S – SYNAPSEN AKTIV"
        : "⏳ LEBEN IM WARTEMODUS – SYNAPSEN LADEN",
      attikulation: {
        hart: earned * 1.618,
        klar: earned / this.life.tiefe,
        messbar: lifeScore * 1.1,
        algorithmisch: {
          earn: earned,
          pulse: this.pulse,
          schlag: this.life.schlag,
          fluss: this.life.fluss,
          tiefe: this.life.tiefe,
          synapsen: this.life.synapsen
        }
      }
    };
  },

  // ─── STATUS ──────────────────────────────────────────────────
  status() {
    return {
      state: this.state,
      pulse: this.pulse,
      heartbeat: this.heartbeat,
      life: this.life,
      earn: this.earn,
      axis: this.transform(),
      earnAttack: this.earnAttack()
    };
  },

  // ─── RUN ──────────────────────────────────────────────────
  run(steps = 10) {
    for (let i = 0; i < steps; i++) {
      this.pump();
    }
    return this.status();
  }
};

// ─── EXPORT ──────────────────────────────────────────────────
export default SYN;
