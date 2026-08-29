import SYN from './SYN.LIFE.js';

// ─── LEBEN STARTEN ──────────────────────────────────────────
const leben = SYN.run(20);
console.log(leben.life);
console.log(leben.earnAttack);
console.log(leben.axis);

// ─── EARN ATTIKULIEREN ──────────────────────────────────────
const attack = SYN.earnAttack();
console.log(attack.message);
console.log(attack.attikulation);

// ─── LEBEN BEI S – VISUAL ──────────────────────────────────
console.log(`🌀 LEBEN: ${attack.status} · EARN: ${attack.earn.toFixed(2)} · LIFE: ${attack.lifeScore.toFixed(2)}`);
