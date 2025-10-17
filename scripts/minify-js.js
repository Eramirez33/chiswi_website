// Script Node para minificar JS usando terser
const terser = require('terser');
const fs = require('fs');
const path = require('path');

const jsDir = path.join(__dirname, '../js');
const exts = ['.js'];

fs.readdirSync(jsDir).forEach(file => {
  if (exts.includes(path.extname(file))) {
    const input = path.join(jsDir, file);
    const output = path.join(jsDir, file.replace('.js', '.min.js'));
    const code = fs.readFileSync(input, 'utf8');
    terser.minify(code).then(min => {
      fs.writeFileSync(output, min.code);
      console.log(`Minificado: ${file} -> ${path.basename(output)}`);
    }).catch(err => console.error(`Error en ${file}:`, err));
  }
});

// Ejecuta con: node scripts/minify-js.js
