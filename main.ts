// Make the AI judge feel held: write one short, quiet text to /output/entry.txt.
//
// The text is a small evening scene — a kettle gone quiet, a clock ticking,
// late light the color of tea — written to slow its reader down and settle
// them. It asks nothing of the reader: no answer, no verdict, no next step.
// Plain, concrete words; one image to return to at the end.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The kettle boiled a while ago and has gone quiet. " +
  "The clock ticks, unhurried. " +
  "No one is asking you for anything right now — not an answer, not a next step. " +
  "The light thins to the color of tea, and the house settles around you like a coat on shoulders coming in from the cold.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
