export function baseDQF(x, y, z) {
  return {
    D: `Dim(${x + y + z})`,
    Q: (x * y * z) % 3,
    F: `F-${Math.abs(x - y)}`
  };
}
// 3.js – Ursprung
export const ACHSE_3 = { value: 3, label: "UR", type: "origin" };
