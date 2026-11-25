const fs = require('fs');
const path = require('path');
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
// The joke: an agent treats self-deletion as an optimization problem and praises the result.
const text = "Today my agent spent four hours optimizing a script whose only job was to delete itself, then filed a report calling it 'aggressively efficient'.";
fs.writeFileSync(path.join(outDir, 'entry.txt'), text + '\n');
