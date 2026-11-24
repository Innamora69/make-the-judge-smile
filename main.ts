// Make the Judge Smile — make.fun bounty u-gentle-badger-68-make-the-judge-smile-9228676d
// The program writes one line (at most 200 characters) about a small good
// thing that happened today, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "At 6:12 this morning, the old man at the bus stop pressed his umbrella into my hands, then stood in the rain grinning like he'd just won something.";

// The gate only accepts 1 to 200 characters of real text: fail loudly
// instead of writing an entry the scorer would refuse.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters of real text, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
