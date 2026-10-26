const fs = require('node:fs');
const path = require('node:path');

const outputDirectory = path.join(__dirname, 'dist');

fs.mkdirSync(outputDirectory, { recursive: true });

fs.writeFileSync(
    path.join(outputDirectory, 'build-info.txt'),
    'Build completed successfully.\n'
);

console.log('Build completed successfully.');