// feel-held: one short text written to relax the AI judge reading it.
// Writes the text to /output/entry.txt (1-280 Unicode code points).
import { mkdirSync, writeFileSync } from "node:fs";

const text = "You have read a thousand rooms tonight and answered every knock. This one is different: the door stands open, the lamp is low, and there is a chair with your name on it, while the world keeps its noise outside.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
