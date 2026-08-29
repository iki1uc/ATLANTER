// ─── NC.engine.js · 6D ATTACK · GENERAL ──────────────────────

import TYQ from "./TYQ.6D.js";
import GENERAL from "./GENERAL.js";

export const NC = {
  mode: "ROOT",
  attackPower: 0,
  multiplier: 1.0,
  axis: [3, 9, 27, 81, 243, 756],

  triggerAttack() {
    this.attackPower = 1.0;
    this.multiplier = 1.0;
    this.mode = "NC6-ATTACK";
    console.log("⚡ 6D ATTACK: SATS STEIGEN · ENGINE STEIGT");
    return this.status();
  },

  triggerPipeline() {
    if (this.attackPower > 0) {
      this.attackPower = Math.min(1.0, this.attackPower * 1.5);
      this.multiplier = 1.5;
    } else {
      this.attackPower = 0.5;
      this.multiplier = 0.5;
    }
    this.mode = "PIPELINEBLITZ";
    console.log(`🌀 PIPELINEBLITZ ×${this.multiplier.toFixed(1)}`);
    return this.status();
  },

  triggerRun3() {
    this.attackPower = Math.min(1.0, this.attackPower + 0.3);
    this.multiplier = Math.min(3.0, this.multiplier + 0.5);
    this.mode = "RUN3";
    console.log("⚡ RUN3 OPERATOR · KIT AKTIV");
    return this.status();
  },

  triggerReset() {
    this.attackPower = 0;
    this.multiplier = 1.0;
    this.mode = "ROOT";
    console.log("⟲ RESET · 756 ACHSEN AKTIV");
    return this.status();
  },

  status() {
    return {
      mode: this.mode,
      attackPower: this.attackPower,
      multiplier: this.multiplier,
      axis: this.axis,
      general: GENERAL.status(),
      tmp: TYQ.run(this.axis, "TMP")
    };
  }
};

export default NC;
