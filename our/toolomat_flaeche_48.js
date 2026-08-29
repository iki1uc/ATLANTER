function AIR_RESPO_NEW() {
    return {
        ID: 48000,
        INDEX: "e",
        STATUS: "REAL",
        MASTER_ID: 1,
        SLAVE_ID: 48000,
        IST: "neu",
        SOLL: "aktiv",
        IST_IST: "ungleich",
        ROOT: true
    };
}
export function flaeche48(values, side) {
  const len = values.length;
  const pos = (len + (side === 'A' ? 3 : 7)) % 16;
  const mass = len * (side === 'A' ? 2 : 4);
  return { POS: pos, MASS: mass, SIDE: side };
}
