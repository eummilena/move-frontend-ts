const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, '..', 'npm-tree.json');
if (!fs.existsSync(file)) {
  console.error('npm-tree.json not found');
  process.exit(2);
}
let text = fs.readFileSync(file, 'utf16le');
const idx = text.indexOf('{');
if (idx > 0) text = text.slice(idx);
const root = JSON.parse(text);
const deps = root.dependencies || {};
const mapVersions = new Map();
function traverse(name, node, set) {
  const key = `${name}@${node.version || ''}`;
  if (set.has(key)) return 0;
  set.add(key);
  const versions = mapVersions.get(name) || new Set();
  versions.add(node.version || '');
  mapVersions.set(name, versions);
  let count = 1;
  if (node.dependencies) {
    for (const [k, v] of Object.entries(node.dependencies)) {
      count += traverse(k, v, set);
    }
  }
  return count;
}
const results = [];
let totalSet = new Set();
for (const [name, node] of Object.entries(deps)) {
  const set = new Set();
  const size = traverse(name, node, set);
  results.push({ name, version: node.version, subtree: size });
  for (const k of set) totalSet.add(k);
}
const multiVersions = [...mapVersions.entries()]
  .filter(([k, s]) => s.size > 1)
  .map(([k, s]) => ({ package: k, versions: [...s] }));
results.sort((a, b) => b.subtree - a.subtree);
const out = {
  topLevelCount: Object.keys(deps).length,
  totalUniquePackages: totalSet.size,
  largest: results.slice(0, 10),
  multiVersionsCount: multiVersions.length,
  multiVersions: multiVersions.slice(0, 20),
};
console.log(JSON.stringify(out, null, 2));
