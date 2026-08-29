export const Axiom698869 = {
  MODE: "12-Achs",
  TYPE: "uOUR-Universal",
  FORM: "Neutral",
  QUALITY: "698869",

  AXIS: {
    CORE: "<B>",        // Modulwert
    TMP:  "TMP",        // universelle Achse
    XI:   "XI",         // optional
    IX:   "IX",         // optional
    AIR:  "AIR",        // optional
    AIV:  "AIV"         // optional
  },

  OPERATOR: {
    MASTER: "<B>-XI",
    SLAVE:  "<B>-IX",
    FLOW:   "XI ↔ IX",
    FLOW_V: "AIR ↕ AIV",
    TMP:    "TMP → CORE"
  },

  PATH: {
    MODE: "698869",
    FULL: "<B> → TMP → XI → IX → AIR → AIV"
  },

  RESONANZ: {
    ORDER: "698869",
    LINK:  "uOUR",
    ROOT:  true,
    STATE: "REAL"
  }
};
