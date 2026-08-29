// Echtzeit
setInterval(() => {
  document.getElementById("clock-real").innerText =
    new Date().toLocaleTimeString();
}, 1000);

// Arbeitszeit
let workSeconds = 0;
setInterval(() => {
  workSeconds++;
  document.getElementById("clock-work").innerText =
    new Date(workSeconds * 1000).toISOString().substr(11, 8);
}, 1000);

const Axiom3D = {
  h: 0,   // Höhe
  b: 0,   // Breite
  t: 0    // Tiefe
};

let h = 0; // Höhe
let b = 0; // Breite
let t = 0; // Tiefe

setInterval(() => h++, 1000);
setInterval(() => b++, 1000);
setInterval(() => t++, 1000);

const Matrix3x3 = [
  [h, b, t],
  [h, b, t],
  [h, b, t]
];

function updateMatrix() {
  const Matrix3x3 = [
    [h, b, t],
    [h, b, t],
    [h, b, t]
  ];

  console.log(Matrix3x3);
}

setInterval(updateMatrix, 1000);
