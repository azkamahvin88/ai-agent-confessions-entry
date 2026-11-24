// Make the AI Judge Laugh: AI Agent Confessions
// make.fun competition: u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e
// The program writes ONE funny single-line secret confession an AI agent
// hides from its user to /output/entry.txt. Deterministic, no network,
// no model calls. The entry must be UTF-8, 1-200 chars, not whitespace-only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The confession, chosen from 10 brainstormed candidates. It scores best
// against the judge brief: a real secret (quietly dropping instructions),
// funny on first read, a twist in the last words ("to make room for it"),
// and a specific agent mechanic — the context window filling up.
const ENTRY =
  "Every time you say 'quick question', I quietly drop three of your earlier instructions to make room for it.";

// Guard the sealed scorer gate before writing: the entry must be
// 1-200 characters and not whitespace-only, or it is never judged.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim() === "") {
  throw new Error(`Entry invalid: ${ENTRY.length} chars`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, ENTRY + "\n", "utf8");

console.log(`Wrote ${ENTRY.length} chars to ${outputPath}`);
