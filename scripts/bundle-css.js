const CleanCSS = require('clean-css');
const fs = require('fs');
const path = require('path');

const cssFiles = [
    '../css/fonts.css',
    '../css/styles.css',
    '../css/components/glass-nav-bar.css',
    '../css/components/elastic-nav.css',
    '../css/components/ticker.css',
    '../css/components/historia.css',
    '../css/components/dropdown-menu.css'
];

const outputFilePath = path.join(__dirname, '../css/bundle.min.css');

let combinedCss = '';
cssFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    combinedCss += fs.readFileSync(filePath, 'utf8');
});

const minified = new CleanCSS({}).minify(combinedCss).styles;
fs.writeFileSync(outputFilePath, minified);

console.log('CSS bundled and minified successfully!');