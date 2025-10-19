const terser = require('terser');
const fs = require('fs');
const path = require('path');

const jsFiles = [
    '../js/config.js',
    '../js/elastic-nav.js',
    '../js/ticker.js',
    '../js/historia.js',
    '../js/mobile-nav.js',
    '../js/process-mobile-animation.js',
    '../js/scroll-to-top.js',
    '../js/ui-helpers.js',
    '../js/parallax.js',
    '../js/hero-carousel.js'
];

const outputFilePath = path.join(__dirname, '../js/bundle.min.js');

let combinedJs = '';
jsFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    combinedJs += fs.readFileSync(filePath, 'utf8');
});

terser.minify(combinedJs).then(min => {
    fs.writeFileSync(outputFilePath, min.code);
    console.log('JS bundled and minified successfully!');
}).catch(err => console.error(`Error bundling and minifying JS:`, err));
