// One Line, One Chill — make.fun entry (u-azazex-one-line-one-chill-6d4d5488)
//
// Writes a single line of horror (one sentence, under 200 characters)
// to /output/entry.txt, where the sealed gate scorer checks it and the
// house judge compares it pairwise against the other entries.
//
// The line was chosen by hand from ten candidates, ranked against the
// judge brief in its stated order — frightening first, then vivid, then
// original, then crafted. See candidates.md in the build workspace for
// the full ranking and pairwise reasoning (no judge API was used).
import { mkdirSync, writeFileSync } from "node:fs";

// Chosen line (116 characters, one sentence):
// dread that is still happening tonight, a concrete scene (baby monitor,
// a dead wife's voice, locks), a fresh turn on a familiar device, and a
// last word — "locks" — that lands the blow: the locks were meant to
// keep it out.
const LINE =
  "Every night the baby monitor whispers my name in my dead wife's voice, and tonight it asked why I changed the locks.";

const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}
// One sentence: the brief gives one breath, no setup, no second chance.
// (Abbreviations aside, a second sentence-ending period means a rewrite.)
const sentenceEnds = (LINE.match(/[.!?](?=\s|$)/g) ?? []).length;
if (sentenceEnds !== 1) {
  throw new Error(`entry must be a single sentence, got ${sentenceEnds} sentence ends`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
