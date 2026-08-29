// ─── TYQ.6D.js · TMP-PUMPE · ACHSEN-MATRIX · 6D ─────────────

const TYQ = {
  RAM: 8192,
  USED: 0,
  FREE: 8192,
  PUMP: false,
  mode: "TMP",

  pump(mode = "TMP") {
    this.USED = 2048;
    this.FREE = this.RAM - this.USED;
    this.PUMP = true;
    this.mode = mode;
    return this;
  },

  sort(values) {
    const raw = values.map(Number).filter(n => !isNaN(n));
    const numeric = [...raw].sort((a, b) => a - b);
    const axisSet = new Set([3, 9, 27, 81, 243, 756]);
    const axisConform = raw.filter(n => axisSet.has(n)).sort((a, b) => a - b);
    const nonConform = raw.filter(n => !axisSet.has(n)).sort((a, b) => a - b);

    const ranked = raw.map((val, idx) => ({
      value: val,
      rank: raw.filter(v => v < val).length + 1,
      index: idx
    })).sort((a, b) => a.rank - b.rank);

    const matrix = {
      3: raw.filter(n => n === 3 || n === 9 || n === 27),
      9: raw.filter(n => n === 81 || n === 243 || n === 756),
      27: raw.filter(n => n % 27 === 0 || n === 756),
      81: raw.filter(n => n % 81 === 0 || n === 756),
      243: raw.filter(n => n % 243 === 0 || n === 756),
      756: raw.filter(n => n === 756)
    };

    const modeTransform = {
      TMP: numeric.map(n => n * 1.0),
      RITH: numeric.map(n => n * 1.618),
      EVO: numeric.map(n => n * 2.718),
      WORK: numeric.map(n => n * 0.618),
      TEAM: numeric.map(n => n / 3)
    };

    this.SORTED = {
      numbers: numeric,
      percent: numeric.map(n => n + "%"),
      degree: numeric.map(n => n + "°"),
      te: numeric.map(n => n + "te"),
      axis: axisConform,
      nonAxis: nonConform,
      ranked: ranked,
      matrix: matrix,
      mode: {
        [this.mode]: modeTransform[this.mode] || numeric,
        all: modeTransform
      }
    };

    return this.SORTED;
  },

  status() {
    return {
      RAM: this.RAM,
      USED: this.USED,
      FREE: this.FREE,
      PUMP: this.PUMP,
      mode: this.mode,
      SORTED: this.SORTED || { numbers: [], percent: [], degree: [], te: [] }
    };
  },

  run(values, mode = "TMP") {
    this.pump(mode);
    this.sort(values);
    return this.status();
  }
};

export default TYQ;
