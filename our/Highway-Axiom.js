export const HIGHWAY = {
  axis: "Highway",
  vector: [3, 9, 27, 81, 243],
  transform(v) { return v.map(n => n * 1.618); }
};
