// Scan-Axiom.js – Gegenstück zu Scan-Axiom.vector

export const ScanAxiom = {
  MODE: "48D-Check",
  TYPE: "uOUR-Diagnose",
  FORM: "Granatapfel-Filter",
  QUALITY: "64x-Zoom",

  CHECK: {
    PHYSIK:  "OK",
    CHEMIE:  "OK",
    MEDICAL: "OK",
    SCHUTZ:  "OK",
    HELP:    "OK",
    ERROR:   "NONE",
    MISS:    "NONE",
    RESULT:  "OK"
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
    D1:  "EAR",
    D2:  "EON",
    D3:  "EXP",
    D4:  "AIR",
    D5:  "AIV",
    D6:  "Φ",
    D7:  "ME",
    D8:  "RAD",
    D9:  "ID",
    D10: "Highway",
    D11: "Operator",
    D12: "Komplettum",
    D13: "Scan"
  },

  RESONANZ: {
    ORDER: "48",
    STATE: "REAL",
    LINK: "uOUR",
    BALANCE: "100%",
    FLOW: "Scan ↔ RAD ↔ ME ↔ ID"
  }
};
