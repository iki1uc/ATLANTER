// flag.vector.js – konformes Gegenstück zu flag.vector

export const FlagAxiom = {
  MODE: "2D-Limiter",
  TYPE: "uOUR-FlowControl",
  FORM: "Granatapfel-Flag",
  QUALITY: "8x-Zoom",

  LIMIT: {
    AIR_rITZ: "MAX",
    AIV_WITZ: "MIN"
  },

  AXIS: {
    UP:   "AIR",
    DOWN: "AIV",
    NULL: "Φ"
  },

  DIMENSION: {
    D1: "AIR",
    D2: "AIV",
    D3: "Φ",
    D4: "Flag"
  },

  RESONANZ: {
    ORDER: "2",
    STATE: "REAL",
    LINK: "uOUR",
    BALANCE: "MAX/MIN",
    FLOW: "AIR ↕ AIV"
  }
};
