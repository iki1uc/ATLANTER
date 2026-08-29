// ─── SHOW.live.bridge.js · GENERAL · VISUAL ──────────────────

import GENERAL from "./GENERAL.js";

export const SHOW = {
  state: {
    active: true,
    mode: "LIVE",
    connect: false
  },

  render(data) {
    console.log("🌀 SHOW.live · RENDER", {
      general: GENERAL.status(),
      data: data,
      timestamp: Date.now()
    });
    return { status: "ok", rendered: true };
  },

  connect() {
    this.state.connect = true;
    console.log("🔗 SHOW.live · CONNECT aktiv");
    return this.state;
  },

  reset() {
    this.state = { active: true, mode: "LIVE", connect: false };
    console.log("⟲ SHOW.live · RESET");
    return this.state;
  }
};

export default SHOW;
