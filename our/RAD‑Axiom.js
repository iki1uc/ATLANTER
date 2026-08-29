// RAD-Axiom.js – Gegenstück zu RAD-Axiom.vector

export const RADAxiom = {
  MODE: "48D-Sweep",
  TYPE: "uOUR-Rotation",
  FORM: "Granatapfel-Orbit",
  QUALITY: "64x-Zoom",

  SWEEP: {
    FULL: 360,
    HALF: 180,
    QUART: 90,
    MICRO: 12,
    NANO: 6
  },

  AXIS: {
    UP: "AIR",
    DOWN: "AIV",
    ROOT: "EAR",
    MID: "EON",
    OPEN: "EXP",
    NULL: "Φ"
  },

  ROTATION: {
    HORIZONTAL: "EAR → EON → EXP",
    VERTICAL:   "AIR ↕ AIV",
    NULLRAUM:   "Φ ↔ ME",
    SELF:       "ME ↔ ID"
  },

  DIMENSION: {
    D1: "EAR",
    D2: "EON",
    D3: "EXP",
    D4: "AIR",
    D5: "AIV",
    D6: "Φ",
    D7: "ME",
    D8: "ID",
    D9: "Highway",
    D10: "Operator",
    D11: "Komplettum",
    D12: "RAD"
  },

  RESONANZ: {
    ORDER: "48",
    STATE: "REAL",
    LINK: "uOUR",
    BALANCE: "100%",
    FLOW: "RAD ↔ Φ ↔ ME ↔ ID"
  }
};
