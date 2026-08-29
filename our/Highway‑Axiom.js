// Highway-Axiom.js – Gegenstück zu Highway-Axiom.vector

export const HighwayAxiom = {
  MODE: "5-Achs",
  TYPE: "uOUR-Highway",
  FORM: "Granatapfel",
  QUALITY: "16x-Zoom",

  AXIS: {
    EAR:  "anchor",
    EON:  "stabilize",
    EXP:  "expand",
    AIR:  "up",
    AIV:  "down"
  },

  OPERATOR: {
    MASTER: "XI",
    SLAVE:  "IX",
    MID:    "X4",
    FLOW_H: "IX → X4 → XI",
    FLOW_V: "AIR ↕ AIV"
  },

  PATH: {
    MODE: "linear",
    HORIZONTAL: ["EAR", "EON", "EXP"],
    VERTICAL:   ["AIR", "AIV"],
    FULL:       "EAR → EON → EXP → AIR → AIV"
  },

  RESONANZ: {
    ORDER: "8",
    LINK:  "uOUR",
    ROOT:  true,
    STATE: "REAL"
  }
};
