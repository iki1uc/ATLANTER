// Operator-Axiom.js – Gegenstück zu Operator-Axiom.vector

export const OperatorAxiom = {
  MODE: "12D-Operator",
  TYPE: "uOUR-Schaltwerk",
  FORM: "Granatapfel-Kern",
  QUALITY: "32x-Zoom",

  OP: {
    XI: { role: "expand",  axis: "EXP", dim: 3 },
    IX: { role: "anchor",  axis: "EAR", dim: 1 },
    X4: { role: "stabilize", axis: "EON", dim: 2 }
  },

  FLOW: {
    HORIZONTAL: "IX → X4 → XI",
    VERTICAL:   "AIR ↕ AIV",
    DIAGONAL:   "ME ↔ ID",
    RADIAL:     "RAD ↔ Φ"
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
    D11: "Komplettum",
    D12: "Operator"
  },

  RESONANZ: {
    ORDER: "12",
    STATE: "REAL",
    LINK: "uOUR",
    BALANCE: "100%"
  }
};
