// Komplettum-Axiom.js – Gegenstück zu Komplettum-Axiom.vector

export const KomplettumAxiom = {
  MODE: "6D-Komplex",
  TYPE: "uOUR-Matrix",
  FORM: "Granatapfel-Schale",
  QUALITY: "16x-Zoom",

  ACHSEN: {
    EAR: { role: "anchor",     dim: 1, flow: "root" },
    EON: { role: "stabilize",  dim: 2, flow: "mid" },
    EXP: { role: "expand",     dim: 3, flow: "open" },
    AIR: { role: "up",         dim: 4, flow: "rise" },
    AIV: { role: "down",       dim: 5, flow: "fall" }
  },

  DIMENSION: {
    D1: "EAR",
    D2: "EON",
    D3: "EXP",
    D4: "AIR",
    D5: "AIV",
    D6: "Φ"
  },

  RELATION: {
    ROOT: "EAR ↔ Φ",
    MID:  "EON ↔ ME",
    OPEN: "EXP ↔ RAD",
    FLOW: "AIR ↕ AIV",
    FULL: "EAR → EON → EXP → AIR → AIV → Φ"
  },

  RESONANZ: {
    ORDER: "8",
    STATE: "REAL",
    LINK: "uOUR",
    BALANCE: "100%"
  }
};
