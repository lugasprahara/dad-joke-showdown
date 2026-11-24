// Dad Joke Showdown — one dad joke of at most 200 characters. The
// program writes it to /output/entry.txt, where the grader's gate
// checks it (UTF-8, 1–200 characters, not only white space) and the
// judge compares it against the other entries two at a time, picking
// the one that earns the bigger groan.
//
// The joke: a barbecue scene, the natural habitat of the dad joke.
// Dad hears the steaks are high, so he comes prepared to reach them —
// and the homophone (steaks / stakes) lands the punchline on the very
// last word, the way a father delivers it across the grill, deadpan.

import { mkdirSync, writeFileSync } from "node:fs";

// A dad joke is two beats: the setup raises the straight question,
// the punchline turns one word of it. Keeping the beats separate makes
// the turn — steaks heard as stakes — easy to see and to retell.
const SETUP = "Why did Dad bring a ladder to the barbecue?";
const PUNCHLINE = "He heard the steaks were high.";

const JOKE = `${SETUP} ${PUNCHLINE}`;

// The gate is the whole game: refuse to ship anything that is not a
// single dad joke inside the character limit.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke must be 1-200 characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
