// absurd-clause-contest — The Absurd Clause Contest
// One original English sentence (<=200 chars): deadpan legal boilerplate
// that quietly turns absurd. Deterministic: writes the exact same bytes
// on every run, no network, no randomness, no clock.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The User agrees to leave one (1) spare key to the User's home under the Company's doormat, and to replace it, at the User's expense, within 24 hours if the Company loses it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);
