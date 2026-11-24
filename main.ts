import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Chill — a single sentence of horror under 200 characters.
// The scare is concrete and specific: a found object, a date that cannot
// be, and handwriting the narrator does not recognise as their own.
// Deterministic: no randomness, no clock, no network — the same line
// is written on every run, with no trailing newline.
const line = "I found my own obituary folded inside my coat pocket, dated tomorrow, in handwriting I don't remember learning.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
