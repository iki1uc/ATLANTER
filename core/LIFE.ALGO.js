// ─── LIFE.ALGO.js · LEBEN VERALGORITHMIESIEREN · 756 ACHSEN ──

export const LIFE_ALGO = {
  // ─── KERN ──────────────────────────────────────────────────
  time: 0,
  pulse: 0,
  syn: 0,
  freund: 0,
  quandt: 1.0,
  earn: 0,

  // ─── ACHSEN (756 als lebendige Punkte) ────────────────────
  axis: {
    3: { value: 3, label: "UR", status: 0, weight: 1 },
    9: { value: 9, label: "KERN", status: 0, weight: 2 },
    27: { value: 27, label: "ORBIT", status: 0, weight: 3 },
    81: { value: 81, label: "RAUM", status: 0, weight: 4 },
    243: { value: 243, label: "KANAL", status: 0, weight: 5 },
    756: { value: 756, label: "LEBEN", status: 0, weight: 6 }
  },

  // ─── PUMPE ──────────────────────────────────────────────────
  pump() {
    this.time += 0.02;
    this.pulse = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(this.time * 0.9));
    this.syn = 0.2 + 0.8 * (0.5 + 0.5 * Math.sin(this.time * 0.7));
    this.freund = this.syn * Math.sin(this.time * 0.7 + Math.PI / 2) * this.quandt;
    this.earn += (this.syn * 0.01 + this.pulse * 0.005) * this.quandt;

    // Achsen aktualisieren
    this.updateAxis();
    return this;
  },

  // ─── ACHSEN ÜBERSETZEN ──────────────────────────────────────
  updateAxis() {
    // Jede Achse bekommt einen lebendigen Status
    const axisKeys = Object.keys(this.axis);

    axisKeys.forEach((key, idx) => {
      const a = this.axis[key];
      // Basis-Wert: SYN + PULS + FREUND + QUANDT
      const base = this.syn * 0.3 + this.pulse * 0.2 + this.freund * 0.1 + this.quandt * 0.1;

      // Achsen-spezifische Gewichtung
      const weightFactor = a.weight / 6;
      a.status = Math.min(1, Math.max(0, base * (1 + weightFactor * 0.5)));

      // Eigenleben: jede Achse hat eigene Schwingung
      a.phase = Math.sin(this.time * (0.1 + idx * 0.05) + idx * 1.2);
      a.live = a.status * (0.7 + 0.3 * a.phase);

      // 756 ist NICHT egal – es ist der Höhepunkt
      if (key === "756") {
        a.live = Math.min(1, a.live * 1.3 + 0.1);
        a.status = Math.min(1, a.status * 1.2 + 0.05);
      }
    });
  },

  // ─── ACHSEN ÜBERSETZUNG ────────────────────────────────────
  translateAxis() {
    const result = {};
    const keys = Object.keys(this.axis);

    keys.forEach(key => {
      const a = this.axis[key];
      result[key] = {
        value: a.value,
        label: a.label,
        live: a.live,
        status: a.status,
        phase: a.phase,
        // Übersetzung: lebendiger Wert
        translated: a.value * (0.5 + 0.5 * a.live),
        // Bedeutung: NICHT egal
        meaning: a.live > 0.5 ? "LEBENDIG" : "SCHWEBEND",
        // Rang: 756 ist immer wichtig
        importance: key === "756" ? 1.0 : a.live
      };
    });

    return result;
  },

  // ─── LEBENS-SCORE ───────────────────────────────────────────
  lifeScore() {
    const axis = this.translateAxis();
    const scores = Object.values(axis).map(a => a.live);
    const avg = scores.reduce((s, v) => s + v, 0) / scores.length;
    const max = Math.max(...scores);
    const min = Math.min(...scores);

    return {
      average: avg,
      max: max,
      min: min,
      spread: max - min,
      total: scores.reduce((s, v) => s + v, 0),
      alive: avg > 0.5 ? "LEBENDIG" : "SCHWEBEND",
      axis: axis
    };
  },

  // ─── RUN ──────────────────────────────────────────────────
  run(steps = 10) {
    for (let i = 0; i < steps; i++) {
      this.pump();
    }
    return this.status();
  },

  // ─── STATUS ──────────────────────────────────────────────────
  status() {
    return {
      time: this.time,
      pulse: this.pulse,
      syn: this.syn,
      freund: this.freund,
      quandt: this.quandt,
      earn: this.earn,
      axis: this.translateAxis(),
      lifeScore: this.lifeScore()
    };
  },

  // ─── QUANDT SETZEN ──────────────────────────────────────────
  setQuandt(value) {
    this.quandt = Math.min(3.0, Math.max(0.5, value));
    return this.quandt;
  },

  // ─── RESET ──────────────────────────────────────────────────
  reset() {
    this.time = 0;
    this.pulse = 0;
    this.syn = 0;
    this.freund = 0;
    this.quandt = 1.0;
    this.earn = 0;
    Object.keys(this.axis).forEach(key => {
      this.axis[key].status = 0;
      this.axis[key].live = 0;
      this.axis[key].phase = 0;
    });
    return this;
  }
};

export default LIFE_ALGO;
