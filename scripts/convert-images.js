// Script Node para convertir imágenes a WebP usando sharp
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '../img');
const exts = ['.jpg', '.jpeg', '.png'];

fs.readdirSync(imgDir).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if (exts.includes(ext)) {
    const input = path.join(imgDir, file);
    const output = path.join(imgDir, file.replace(ext, '.webp'));
    sharp(input)
      .webp({ quality: 80 })
      .toFile(output)
      .then(() => console.log(`Convertido: ${file} -> ${path.basename(output)}`))
      .catch(err => console.error(`Error en ${file}:`, err));
  }
});

// Ejecuta con: node scripts/convert-images.js
