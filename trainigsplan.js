import { useState } from "react";

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
      { day: "Mo", type: "lauf", strecke: "Kleine (4,5 km)", note: "Ziel: unter 28 min" },
      { day: "Di", type: "lauf", strecke: "Große (9,1 km)", note: "Komplett, lockere Pace" },
      { day: "Mi", type: "gehen", strecke: "45 min", note: "Aktive Erholung" },
      { day: "Do", type: "lauf", strecke: "Mittlere (7,2 km)", note: "Komplett" },
      { day: "Fr", type: "lauf", strecke: "Große (9,1 km)", note: "Komplett" },
      { day: "Sa", type: "pause", strecke: "Ruhetag", note: "⚖️ Wiegen" },
      { day: "So", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
    ]
  },
  {
    week: 15, phase: "Konsolidierung", phaseColor: "#a78bfa",
    focus: "Woche der großen Strecken",
    lauftage: 4, ruhetage: 2, gehtage: 1,
    days: [
      { day: "Mo", type: "lauf", strecke: "Mittlere (7,2 km)", note: "Komplett" },
      { day: "Di", type: "lauf", strecke: "Große (9,1 km)", note: "Komplett" },
      { day: "Mi", type: "gehen", strecke: "45 min", note: "Aktive Erholung" },
      { day: "Do", type: "lauf", strecke: "Große (9,1 km)", note: "Komplett" },
      { day: "Fr", type: "lauf", strecke: "Große (9,1 km)", note: "3× große Strecke diese Woche 💪" },
      { day: "Sa", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
      { day: "So", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
    ]
  },
  {
    week: 16, phase: "Konsolidierung", phaseColor: "#a78bfa",
    focus: "Erholungswoche — Volumen reduzieren",
    lauftage: 3, ruhetage: 3, gehtage: 1,
    days: [
      { day: "Mo", type: "lauf", strecke: "Kleine (4,5 km)", note: "Locker, kein Druck" },
      { day: "Di", type: "gehen", strecke: "45 min", note: "Aktive Erholung" },
      { day: "Mi", type: "lauf", strecke: "Mittlere (7,2 km)", note: "Komplett, lockere Pace" },
      { day: "Do", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
      { day: "Fr", type: "lauf", strecke: "Große (9,1 km)", note: "Komplett" },
      { day: "Sa", type: "pause", strecke: "Ruhetag", note: "⚖️ Wiegen — 4 Monate!" },
      { day: "So", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
    ]
  },
  {
    week: 17, phase: "Zielgerade", phaseColor: "#f87171",
    focus: "Pace steigern — alle Strecken flotter",
    lauftage: 4, ruhetage: 2, gehtage: 1,
    days: [
      { day: "Mo", type: "lauf", strecke: "Kleine (4,5 km)", note: "Ziel: unter 25 min" },
      { day: "Di", type: "lauf", strecke: "Große (9,1 km)", note: "Komplett, bewusst auf Tempo achten" },
      { day: "Mi", type: "gehen", strecke: "45 min", note: "Aktive Erholung" },
      { day: "Do", type: "lauf", strecke: "Mittlere (7,2 km)", note: "Ziel: unter 45 min" },
      { day: "Fr", type: "lauf", strecke: "Große (9,1 km)", note: "Komplett" },
      { day: "Sa", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
      { day: "So", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
    ]
  },
  {
    week: 18, phase: "Zielgerade", phaseColor: "#f87171",
    focus: "Konstanz — 4× große Strecke",
    lauftage: 5, ruhetage: 2, gehtage: 0,
    days: [
      { day: "Mo", type: "lauf", strecke: "Mittlere (7,2 km)", note: "Komplett" },
      { day: "Di", type: "lauf", strecke: "Große (9,1 km)", note: "Komplett" },
      { day: "Mi", type: "pause", strecke: "Ruhetag", note: "Aktive Erholung oder Ruhe" },
      { day: "Do", type: "lauf", strecke: "Große (9,1 km)", note: "Komplett" },
      { day: "Fr", type: "lauf", strecke: "Große (9,1 km)", note: "Komplett" },
      { day: "Sa", type: "lauf", strecke: "Kleine (4,5 km)", note: "Locker auslaufen" },
      { day: "So", type: "pause", strecke: "Ruhetag", note: "⚖️ Wiegen" },
    ]
  },
  {
    week: 19, phase: "Zielgerade", phaseColor: "#f87171",
    focus: "Große Strecke unter 60 min",
    lauftage: 4, ruhetage: 2, gehtage: 1,
    days: [
      { day: "Mo", type: "lauf", strecke: "Kleine (4,5 km)", note: "Komplett, flott" },
      { day: "Di", type: "lauf", strecke: "Große (9,1 km)", note: "🎯 Ziel: unter 60 min" },
      { day: "Mi", type: "gehen", strecke: "45 min", note: "Aktive Erholung" },
      { day: "Do", type: "lauf", strecke: "Mittlere (7,2 km)", note: "Komplett" },
      { day: "Fr", type: "lauf", strecke: "Große (9,1 km)", note: "Komplett, Pace halten" },
      { day: "Sa", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
      { day: "So", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
    ]
  },
  {
    week: 20, phase: "Zielgerade", phaseColor: "#f87171",
    focus: "Erholungswoche vor Endspurt",
    lauftage: 3, ruhetage: 3, gehtage: 1,
    days: [
      { day: "Mo", type: "lauf", strecke: "Kleine (4,5 km)", note: "Locker" },
      { day: "Di", type: "gehen", strecke: "45 min", note: "Aktive Erholung" },
      { day: "Mi", type: "lauf", strecke: "Mittlere (7,2 km)", note: "Komplett, ruhige Pace" },
      { day: "Do", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
      { day: "Fr", type: "lauf", strecke: "Große (9,1 km)", note: "Komplett" },
      { day: "Sa", type: "pause", strecke: "Ruhetag", note: "⚖️ Wiegen — 5 Monate!" },
      { day: "So", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
    ]
  },
  {
    week: 21, phase: "Endspurt", phaseColor: "#fb923c",
    focus: "Peak-Woche — maximales Volumen",
    lauftage: 5, ruhetage: 2, gehtage: 0,
    days: [
      { day: "Mo", type: "lauf", strecke: "Mittlere (7,2 km)", note: "Komplett" },
      { day: "Di", type: "lauf", strecke: "Große (9,1 km)", note: "Komplett" },
      { day: "Mi", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
      { day: "Do", type: "lauf", strecke: "Große (9,1 km)", note: "Komplett" },
      { day: "Fr", type: "lauf", strecke: "Große (9,1 km)", note: "Komplett" },
      { day: "Sa", type: "lauf", strecke: "Mittlere (7,2 km)", note: "Locker auslaufen" },
      { day: "So", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
    ]
  },
  {
    week: 22, phase: "Endspurt", phaseColor: "#fb923c",
    focus: "Tapering — Körper frisch halten",
    lauftage: 3, ruhetage: 3, gehtage: 1,
    days: [
      { day: "Mo", type: "lauf", strecke: "Kleine (4,5 km)", note: "Locker, kein Stress" },
      { day: "Di", type: "gehen", strecke: "30 min", note: "Leichte Bewegung" },
      { day: "Mi", type: "lauf", strecke: "Mittlere (7,2 km)", note: "Komplett, ruhige Pace" },
      { day: "Do", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
      { day: "Fr", type: "lauf", strecke: "Große (9,1 km)", note: "Komplett — letzter Lauf vor Finalwoche" },
      { day: "Sa", type: "pause", strecke: "Ruhetag", note: "⚖️ Wiegen" },
      { day: "So", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
    ]
  },
  {
    week: 23, phase: "Endspurt", phaseColor: "#fb923c",
    focus: "Letzte Vorbereitung — Energie tanken",
    lauftage: 3, ruhetage: 3, gehtage: 1,
    days: [
      { day: "Mo", type: "lauf", strecke: "Kleine (4,5 km)", note: "Locker, Beine frisch halten" },
      { day: "Di", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
      { day: "Mi", type: "lauf", strecke: "Mittlere (7,2 km)", note: "Komplett, entspannt" },
      { day: "Do", type: "gehen", strecke: "30 min", note: "Leichte Bewegung" },
      { day: "Fr", type: "lauf", strecke: "Kleine (4,5 km)", note: "Letzter Lauf vor dem großen Tag" },
      { day: "Sa", type: "pause", strecke: "Ruhetag", note: "Früh ins Bett. Gut essen." },
      { day: "So", type: "pause", strecke: "Ruhetag", note: "Ruhe und mentale Vorbereitung" },
    ]
  },
  {
    week: 24, phase: "Ziel erreicht", phaseColor: "#fbbf24",
    focus: "🏆 Finaler Run — Gewichtsziel erreicht",
    lauftage: 2, ruhetage: 4, gehtage: 1,
    days: [
      { day: "Mo", type: "pause", strecke: "Ruhetag", note: "Ausruhen, viel trinken, gut essen" },
      { day: "Di", type: "lauf", strecke: "Kleine (4,5 km)", note: "Locker einlaufen — kein Stress" },
      { day: "Mi", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
      { day: "Do", type: "gehen", strecke: "30 min", note: "Letzte lockere Bewegung" },
      { day: "Fr", type: "pause", strecke: "Ruhetag", note: "Energie tanken" },
      { day: "Sa", type: "pause", strecke: "Ruhetag", note: "Ruhe" },
      { day: "So", type: "lauf", strecke: "Große (9,1 km)", note: "🏆 FINALER RUN — alles geben! Du hast 24 Wochen dafür trainiert." },
    ]
  },
];

const phases = ["Fundament", "Aufbau", "Ausdauer", "Konsolidierung", "Zielgerade", "Endspurt", "Ziel erreicht"];
const phaseColors = {
  "Fundament": "#4ade80",
  "Aufbau": "#60a5fa",
  "Ausdauer": "#f59e0b",
  "Konsolidierung": "#a78bfa",
  "Zielgerade": "#f87171",
  "Endspurt": "#fb923c",
  "Ziel erreicht": "#fbbf24",
};

const typeConfig = {
  lauf: { label: "Laufen", bg: "rgba(74,222,128,0.10)", border: "rgba(74,222,128,0.35)", dot: "#4ade80" },
  gehen: { label: "Gehen", bg: "rgba(148,163,184,0.07)", border: "rgba(148,163,184,0.18)", dot: "#94a3b8" },
  pause: { label: "Pause", bg: "rgba(255,255,255,0.02)", border: "rgba(255,255,255,0.05)", dot: "#475569" },
};

const weighInWeeks = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24];

export default function Trainingsplan() {
  const [activeWeek, setActiveWeek] = useState(0);
  const [completedWeeks, setCompletedWeeks] = useState([]);
  const week = allWeeks[activeWeek];

  const toggleComplete = (weekIdx) => {
    setCompletedWeeks(prev =>
      prev.includes(weekIdx) ? prev.filter(w => w !== weekIdx) : [...prev, weekIdx]
    );
  };

  const progress = Math.round((completedWeeks.length / 24) * 100);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#08080e",
      color: "#e2e8f0",
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      padding: "20px 14px 40px",
      boxSizing: "border-box",
      maxWidth: 500,
      margin: "0 auto"
    }}>
      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 10, letterSpacing: 3, color: "#475569", textTransform: "uppercase", marginBottom: 4 }}>
          24-Wochen Plan
        </div>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#f1f5f9" }}>
          Von 105 kg zum Ziel
        </h1>
        <p style={{ margin: "4px 0 0", fontSize: 12, color: "#64748b" }}>
          4,5 km → 7,2 km → 9,1 km komplett · ~85–90 kg Zielgewicht
        </p>
      </div>

      {/* Progress Bar */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ fontSize: 11, color: "#64748b" }}>Gesamtfortschritt</span>
          <span style={{ fontSize: 11, color: "#f1f5f9", fontWeight: 700 }}>{completedWeeks.length}/24 Wochen · {progress}%</span>
        </div>
        <div style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 99, overflow: "hidden" }}>
          <div style={{
            height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(90deg, #4ade80, #60a5fa, #f87171, #fbbf24)",
            borderRadius: 99,
            transition: "width 0.4s ease"
          }} />
        </div>
      </div>

      {/* Phase Legend */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
        {phases.map(p => (
          <div key={p} style={{
            display: "flex", alignItems: "center", gap: 5,
            padding: "3px 8px", borderRadius: 99,
            background: `${phaseColors[p]}12`,
            border: `1px solid ${phaseColors[p]}30`
          }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: phaseColors[p] }} />
            <span style={{ fontSize: 10, color: phaseColors[p] }}>{p}</span>
          </div>
        ))}
      </div>

      {/* Week Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 5, marginBottom: 20 }}>
        {allWeeks.map((w, i) => {
          const isActive = i === activeWeek;
          const isDone = completedWeeks.includes(i);
          const color = phaseColors[w.phase];
          const isWeighIn = weighInWeeks.includes(w.week);
          return (
            <button
              key={i}
              onClick={() => setActiveWeek(i)}
              style={{
                padding: "6px 2px",
                borderRadius: 7,
                border: `1.5px solid ${isActive ? color : isDone ? `${color}50` : "rgba(255,255,255,0.07)"}`,
                background: isActive ? `${color}18` : isDone ? `${color}08` : "rgba(255,255,255,0.02)",
                color: isActive ? color : isDone ? `${color}90` : "#475569",
                fontWeight: isActive ? 700 : 400,
                fontSize: 11,
                cursor: "pointer",
                transition: "all 0.15s",
                position: "relative",
                textAlign: "center"
              }}
            >
              {isDone ? "✓" : `W${w.week}`}
              {isWeighIn && !isDone && (
                <div style={{
                  position: "absolute", top: -2, right: -2,
                  width: 5, height: 5, borderRadius: "50%",
                  background: "#fbbf24"
                }} />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Week */}
      <div style={{
        padding: "12px 14px",
        borderRadius: 12,
        background: `${phaseColors[week.phase]}10`,
        border: `1px solid ${phaseColors[week.phase]}28`,
        marginBottom: 14
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 10, color: phaseColors[week.phase], letterSpacing: 2, textTransform: "uppercase", marginBottom: 2 }}>
              {week.phase}
            </div>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#f1f5f9" }}>Woche {week.week}</div>
            <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>{week.focus}</div>
          </div>
          <button
            onClick={() => toggleComplete(activeWeek)}
            style={{
              padding: "6px 12px",
              borderRadius: 8,
              border: `1px solid ${completedWeeks.includes(activeWeek) ? phaseColors[week.phase] : "rgba(255,255,255,0.12)"}`,
              background: completedWeeks.includes(activeWeek) ? `${phaseColors[week.phase]}20` : "transparent",
              color: completedWeeks.includes(activeWeek) ? phaseColors[week.phase] : "#64748b",
              fontSize: 11,
              fontWeight: 600,
              cursor: "pointer"
            }}
          >
            {completedWeeks.includes(activeWeek) ? "✓ Erledigt" : "Abhaken"}
          </button>
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
          <span style={{ fontSize: 11, color: "#4ade80" }}>🏃 {week.lauftage}× Laufen</span>
          <span style={{ fontSize: 11, color: "#94a3b8" }}>🚶 {week.gehtage}× Gehen</span>
          <span style={{ fontSize: 11, color: "#475569" }}>😴 {week.ruhetage}× Pause</span>
          {weighInWeeks.includes(week.week) && <span style={{ fontSize: 11, color: "#fbbf24" }}>⚖️ Wiegetag</span>}
        </div>
      </div>

      {/* Days */}
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {week.days.map((d, i) => {
          const cfg = typeConfig[d.type];
          return (
            <div key={i} style={{
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
              padding: "11px 13px",
              borderRadius: 10,
              background: cfg.bg,
              border: `1px solid ${cfg.border}`,
            }}>
              <div style={{
                minWidth: 28,
                fontWeight: 700,
                fontSize: 12,
                color: d.type === "lauf" ? phaseColors[week.phase] : d.type === "gehen" ? "#94a3b8" : "#334155",
                paddingTop: 1
              }}>
                {d.day}
              </div>
              <div style={{
                width: 6, height: 6, borderRadius: "50%",
                background: cfg.dot, flexShrink: 0, marginTop: 4
              }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#e2e8f0", marginBottom: 2 }}>
                  {d.strecke}
                </div>
                <div style={{ fontSize: 11, color: "#64748b", lineHeight: 1.5 }}>
                  {d.note}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Nav Buttons */}
      <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
        <button
          onClick={() => setActiveWeek(Math.max(0, activeWeek - 1))}
          disabled={activeWeek === 0}
          style={{
            flex: 1, padding: "10px", borderRadius: 9,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
            color: activeWeek === 0 ? "#2d3748" : "#94a3b8",
            fontSize: 13, cursor: activeWeek === 0 ? "default" : "pointer"
          }}
        >
          ← Vorherige
        </button>
        <button
          onClick={() => setActiveWeek(Math.min(23, activeWeek + 1))}
          disabled={activeWeek === 23}
          style={{
            flex: 1, padding: "10px", borderRadius: 9,
            border: `1px solid ${phaseColors[week.phase]}40`,
            background: `${phaseColors[week.phase]}12`,
            color: phaseColors[week.phase],
            fontSize: 13, fontWeight: 600,
            cursor: activeWeek === 23 ? "default" : "pointer"
          }}
        >
          Nächste →
        </button>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: 20, padding: "12px 14px", borderRadius: 10,
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.05)"
      }}>
        <div style={{ fontSize: 10, color: "#334155", letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>Täglich</div>
        <div style={{ fontSize: 11, color: "#475569", lineHeight: 1.7 }}>
          🥚 2 Eier + Banane zum Frühstück<br />
          🥣 Protein Overnight Oats zum Mittag<br />
          💧 Nur Wasser trinken<br />
          ⚖️ Jeden Mittwoch nüchtern wiegen
        </div>
      </div>
    </div>
  );
}