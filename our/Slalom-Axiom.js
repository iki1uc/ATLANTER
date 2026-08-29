// Slalom-Axiom.js – Gegenstück zu Slalom-Axiom.vector (korrigiert)

export const SlalomAxiom = {
  MODE: "12D-Slalom",
  TYPE: "uOUR-Pattern",
  FORM: "Granatapfel-Slalom",
  QUALITY: "32x-Zoom",

  RESPO: 3,
  TARGET: 4,

  PATH: {
    FULL: "EAR → EON → EXP → AIR → AIV",
    ARRAY: ["EAR", "EON", "EXP", "AIR", "AIV"]
  },

  AXIS: {
    ROOT: "EAR",
    MID:  "EON",
    OPEN: "EXP",
    UP:   "AIR",
    DOWN: "AIV",
    NULL: "Φ"
  },

  DIMENSION: {
    D1: "EAR",
    D2: "EON",
    D3: "EXP",
    D4: "AIR",
    D5: "AIV",
    D6: "Φ",
    D7: "ME",
    D8: "RAD",
    D9: "ID",
    D10: "Highway",
    D11: "Operator",
    D12: "Komplettum",
    D13: "Scan",
    D14: "Slalom"
  },

  RESONANZ: {
    ORDER: "12",
    STATE: "REAL",
    LINK: "uOUR",
    BALANCE: "100%",
    FLOW: "Slalom ↔ Scan ↔ RAD ↔ ME ↔ ID"
  }
};
