import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "My laptop fan sounds like a jet engine every time I open a spreadsheet, like the numbers might actually kill it.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry line must be 1-200 characters, got ${LINE.length}.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
