const allWeeks = [
  {
    week: 1, phase: "Fundament", phaseColor: "#4ade80",
    focus: "Ankommen — Intervalle 2:1",
    lauftage: 3, ruhetage: 2, gehtage: 2,
    days: [
      { day: "Mo", type: "lauf", strecke: "Kleine (4,5 km)", note: "1 min Warm-up gehen, dann 2 min laufen / 1 min gehen × 14" },
      { day: "Di", type: "gehen", strecke: "30–45 min", note: "Aktive Erholung" },
      { day: "Mi", type: "lauf", strecke: "Kleine (4,5 km)", note: "Gleiche Intervalle wie Mo" },
      { day: "Do", type: "gehen", strecke: "30–45 min", note: "Aktive Erholung" },
      { day: "Fr", type: "lauf", strecke: "Kleine (4,5 km)", note: "3. Lauf — Pace egal, ankommen zählt" },
      { day: "Sa", type: "pause", strecke: "Ruhetag", note: "Beine hochlegen" },
      { day: "So", type: "pause", strecke: "Ruhetag", note: "Optional: lockerer Spaziergang" },
    ]
  },

  {
    week: 2, phase: "Fundament", phaseColor: "#4ade80",
    focus: "Intervalle verlängern — 3:1",
    lauftage: 3, ruhetage: 2, gehtage: 2,
    days: [
      { day: "Mo", type: "lauf", strecke: "Kleine (4,5 km)", note: "3 min laufen / 1 min gehen × 11" },
      { day: "Di", type: "gehen", strecke: "30–45 min", note: "Aktive Erholung" },
      { day: "Mi", type: "lauf", strecke: "Kleine (4,5 km)", note: "Gleiche Intervalle" },
      { day: "Do", type: "gehen", strecke: "30–45 min", note: "Aktive Erholung" },
      { day: "Fr", type: "lauf", strecke: "Kleine (4,5 km)", note: "Letzte 500m komplett durchlaufen versuchen" },
      { day: "Sa", type: "pause", strecke: "Ruhetag", note: "Knie checken" },
      { day: "So", type: "pause", strecke: "Ruhetag", note: "⚖️ Wiegen (Mittwoch-Wert vergleichen)" },
    ]
  },

  {
    week: 3, phase: "Fundament", phaseColor: "#4ade80",
    focus: "4 Lauftage — Intervalle 5:1",
    lauftage: 4, ruhetage: 2, gehtage: 1,
    days: [
      { day: "Mo", type: "lauf", strecke: "Kleine (4,5 km)", note: "5 min laufen / 1 min gehen × 8" },
      { day: "Di", type: "lauf", strecke: "Kleine (4,5 km)", note: "Gleiche Intervalle" },
      { day: "Mi", type: "gehen", strecke: "30–45 min", note: "Aktive Erholung" },
      { day: "Do", type: "lauf", strecke: "Kleine (4,5 km)", note: "3 km am Stück versuchen" },
      { day: "Fr", type: "lauf", strecke: "Kleine (4,5 km)", note: "Ruhige Pace, Atmung kontrollieren" },
      { day: "Sa", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
      { day: "So", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
    ]
  },

  {
    week: 4, phase: "Fundament", phaseColor: "#4ade80",
    focus: "Erste Strecke komplett — Test auf Mittlere",
    lauftage: 4, ruhetage: 2, gehtage: 1,
    days: [
      { day: "Mo", type: "lauf", strecke: "Kleine (4,5 km)", note: "🎯 Ziel: komplett durchlaufen!" },
      { day: "Di", type: "gehen", strecke: "30–45 min", note: "Aktive Erholung" },
      { day: "Mi", type: "lauf", strecke: "Kleine (4,5 km)", note: "Komplett durchlaufen" },
      { day: "Do", type: "gehen", strecke: "30–45 min", note: "Aktive Erholung" },
      { day: "Fr", type: "lauf", strecke: "Mittlere (7,2 km)", note: "🎯 Erster Test mittlere Strecke — Laufen/Gehen erlaubt!" },
      { day: "Sa", type: "pause", strecke: "Ruhetag", note: "⚖️ Wiegen" },
      { day: "So", type: "pause", strecke: "Ruhetag", note: "4 Wochen geschafft — stolz sein!" },
    ]
  },

  {
    week: 5, phase: "Aufbau", phaseColor: "#60a5fa",
    focus: "Mittlere Strecke festigen — 2:1 Intervalle",
    lauftage: 4, ruhetage: 2, gehtage: 1,
    days: [
      { day: "Mo", type: "lauf", strecke: "Kleine (4,5 km)", note: "Komplett durchlaufen — Pflicht ab jetzt" },
      { day: "Di", type: "lauf", strecke: "Mittlere (7,2 km)", note: "2 min laufen / 1 min gehen" },
      { day: "Mi", type: "gehen", strecke: "45 min", note: "Aktive Erholung" },
      { day: "Do", type: "lauf", strecke: "Kleine (4,5 km)", note: "Komplett, etwas schneller als letzte Woche" },
      { day: "Fr", type: "lauf", strecke: "Mittlere (7,2 km)", note: "Gleiche Intervalle wie Di" },
      { day: "Sa", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
      { day: "So", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
    ]
  },

  {
    week: 6, phase: "Aufbau", phaseColor: "#60a5fa",
    focus: "Mittlere Strecke — Intervalle 4:1",
    lauftage: 4, ruhetage: 2, gehtage: 1,
    days: [
      { day: "Mo", type: "lauf", strecke: "Kleine (4,5 km)", note: "Komplett, Pace etwas steigern" },
      { day: "Di", type: "lauf", strecke: "Mittlere (7,2 km)", note: "4 min laufen / 1 min gehen" },
      { day: "Mi", type: "gehen", strecke: "45 min", note: "Aktive Erholung" },
      { day: "Do", type: "lauf", strecke: "Kleine (4,5 km)", note: "Komplett" },
      { day: "Fr", type: "lauf", strecke: "Mittlere (7,2 km)", note: "Letzte 1 km komplett durchlaufen" },
      { day: "Sa", type: "pause", strecke: "Ruhetag", note: "⚖️ Wiegen" },
      { day: "So", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
    ]
  },

  {
    week: 7, phase: "Aufbau", phaseColor: "#60a5fa",
    focus: "Mittlere Strecke — 5 km am Stück",
    lauftage: 4, ruhetage: 2, gehtage: 1,
    days: [
      { day: "Mo", type: "lauf", strecke: "Kleine (4,5 km)", note: "Komplett, flüssig laufen" },
      { day: "Di", type: "lauf", strecke: "Mittlere (7,2 km)", note: "5 km am Stück, Rest Intervalle" },
      { day: "Mi", type: "gehen", strecke: "45 min", note: "Aktive Erholung" },
      { day: "Do", type: "lauf", strecke: "Kleine (4,5 km)", note: "Komplett" },
      { day: "Fr", type: "lauf", strecke: "Mittlere (7,2 km)", note: "Gleiche Vorgabe wie Di" },
      { day: "Sa", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
      { day: "So", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
    ]
  },

  {
    week: 8, phase: "Aufbau", phaseColor: "#60a5fa",
    focus: "Mittlere Strecke komplett — Test Große Strecke",
    lauftage: 4, ruhetage: 2, gehtage: 1,
    days: [
      { day: "Mo", type: "lauf", strecke: "Kleine (4,5 km)", note: "Komplett, lockere Pace" },
      { day: "Di", type: "lauf", strecke: "Mittlere (7,2 km)", note: "🎯 Komplett durchlaufen!" },
      { day: "Mi", type: "gehen", strecke: "45 min", note: "Aktive Erholung" },
      { day: "Do", type: "lauf", strecke: "Kleine (4,5 km)", note: "Komplett" },
      { day: "Fr", type: "lauf", strecke: "Große (9,1 km)", note: "🎯 Erster Test große Strecke — Intervalle erlaubt!" },
      { day: "Sa", type: "pause", strecke: "Ruhetag", note: "⚖️ Wiegen — 2 Monate geschafft!" },
      { day: "So", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
    ]
  },

  {
    week: 9, phase: "Ausdauer", phaseColor: "#f59e0b",
    focus: "Große Strecke aufbauen — 3:1 Intervalle",
    lauftage: 4, ruhetage: 2, gehtage: 1,
    days: [
      { day: "Mo", type: "lauf", strecke: "Mittlere (7,2 km)", note: "Komplett — Pflicht ab jetzt" },
      { day: "Di", type: "lauf", strecke: "Große (9,1 km)", note: "3 min laufen / 1 min gehen" },
      { day: "Mi", type: "gehen", strecke: "45 min", note: "Aktive Erholung" },
      { day: "Do", type: "lauf", strecke: "Mittlere (7,2 km)", note: "Komplett" },
      { day: "Fr", type: "lauf", strecke: "Große (9,1 km)", note: "Gleiche Intervalle" },
      { day: "Sa", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
      { day: "So", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
    ]
  },

  {
    week: 10, phase: "Ausdauer", phaseColor: "#f59e0b",
    focus: "Große Strecke — 5:1 Intervalle",
    lauftage: 4, ruhetage: 2, gehtage: 1,
    days: [
      { day: "Mo", type: "lauf", strecke: "Mittlere (7,2 km)", note: "Komplett" },
      { day: "Di", type: "lauf", strecke: "Große (9,1 km)", note: "5 min laufen / 1 min gehen" },
      { day: "Mi", type: "gehen", strecke: "45 min", note: "Aktive Erholung" },
      { day: "Do", type: "lauf", strecke: "Mittlere (7,2 km)", note: "Komplett, etwas schneller" },
      { day: "Fr", type: "lauf", strecke: "Große (9,1 km)", note: "6 km am Stück versuchen" },
      { day: "Sa", type: "pause", strecke: "Ruhetag", note: "⚖️ Wiegen" },
      { day: "So", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
    ]
  },

  {
    week: 11, phase: "Ausdauer", phaseColor: "#f59e0b",
    focus: "Große Strecke — 7 km am Stück",
    lauftage: 4, ruhetage: 2, gehtage: 1,
    days: [
      { day: "Mo", type: "lauf", strecke: "Mittlere (7,2 km)", note: "Komplett" },
      { day: "Di", type: "lauf", strecke: "Große (9,1 km)", note: "7 km am Stück, Rest gehen" },
      { day: "Mi", type: "gehen", strecke: "45 min", note: "Aktive Erholung" },
      { day: "Do", type: "lauf", strecke: "Mittlere (7,2 km)", note: "Komplett" },
      { day: "Fr", type: "lauf", strecke: "Große (9,1 km)", note: "Gleiche Vorgabe wie Di" },
      { day: "Sa", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
      { day: "So", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
    ]
  },

  {
    week: 12, phase: "Ausdauer", phaseColor: "#f59e0b",
    focus: "Große Strecke komplett — erster Durchlauf!",
    lauftage: 4, ruhetage: 2, gehtage: 1,
    days: [
      { day: "Mo", type: "lauf", strecke: "Mittlere (7,2 km)", note: "Lockere Pace — Energie sparen" },
      { day: "Di", type: "gehen", strecke: "45 min", note: "Aktive Erholung — Beine schonen" },
      { day: "Mi", type: "lauf", strecke: "Kleine (4,5 km)", note: "Locker, kein Stress" },
      { day: "Do", type: "gehen", strecke: "30 min", note: "Leichte Erholung" },
      { day: "Fr", type: "lauf", strecke: "Große (9,1 km)", note: "🏆 9,1 km komplett durchlaufen!" },
      { day: "Sa", type: "pause", strecke: "Ruhetag", note: "⚖️ Wiegen — 3 Monate!" },
      { day: "So", type: "pause", strecke: "Ruhetag", note: "Feiern. Wirklich." },
    ]
  },

  {
    week: 13, phase: "Konsolidierung", phaseColor: "#a78bfa",
    focus: "Alle 3 Strecken beherrschen",
    lauftage: 4, ruhetage: 2, gehtage: 1,
    days: [
      { day: "Mo", type: "lauf", strecke: "Kleine (4,5 km)", note: "Komplett, flottes Tempo" },
      { day: "Di", type: "lauf", strecke: "Große (9,1 km)", note: "Komplett durchlaufen" },
      { day: "Mi", type: "gehen", strecke: "45 min", note: "Aktive Erholung" },
      { day: "Do", type: "lauf", strecke: "Mittlere (7,2 km)", note: "Komplett" },
      { day: "Fr", type: "lauf", strecke: "Große (9,1 km)", note: "Komplett — Pace etwas steigern" },
      { day: "Sa", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
      { day: "So", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
    ]
  },

  {
    week: 14, phase: "Konsolidierung", phaseColor: "#a78bfa",
    focus: "Pace verbessern — Kleine Strecke schneller",
    lauftage: 4, ruhetage: 2, gehtage: 1,
    days: [
      { day: "Mo", type: "lauf", strecke: "
