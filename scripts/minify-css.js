// Script Node para minificar CSS usando clean-css
const CleanCSS = require('clean-css');
const fs = require('fs');
const path = require('path');

const input = path.join(__dirname, '../css/styles.css');
const output = path.join(__dirname, '../css/styles.min.css');

const css = fs.readFileSync(input, 'utf8');
const minified = new CleanCSS({}).minify(css).styles;
fs.writeFileSync(output, minified);
console.log('Minificado: styles.min.css');

// Ejecuta con: node scripts/minify-css.js
