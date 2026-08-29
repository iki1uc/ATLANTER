function GHOST_SCAN_REAL(respo) {
    return {
        ID: respo.ID ?? 0,
        NAME: respo.NAME ?? "UNBEKANNT",
        STATUS: respo.STATUS ?? "0",
        IST: respo.IST ?? "leer",
        SOLL: respo.SOLL ?? "aktiv",
        ERROR: respo.ERROR ?? false,
        MISS: respo.MISS ?? false,
        HELP: respo.HELP ?? false,
        OUT: {
            PHYSIK: "OK",
            CHEMIE: "OK",
            MEDICAL: "OK",
            SCHUTZ: "OK",
            HELP: respo.HELP ? "NEED" : "OK",
            ERROR: respo.ERROR ? "FOUND" : "NONE",
            MISS: respo.MISS ? "FOUND" : "NONE"
        },
        RESULT: respo.STATUS === "0" ? "HELFEN" : "OK"
    };
}
