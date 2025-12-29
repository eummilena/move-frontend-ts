const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, '..', 'npm-tree.json');
if (!fs.existsSync(file)) { console.error('npm-tree.json not found'); process.exit(2); }
const buf = fs.readFileSync(file);
console.log('length:', buf.length);
console.log('first 8 bytes (hex):', buf.slice(0,8).toString('hex'));
console.log('first 8 bytes (utf8):', buf.slice(0,8).toString('utf8'));
console.log('starts with BOM:', buf.slice(0,3).toString('hex') === 'efbbbf');
