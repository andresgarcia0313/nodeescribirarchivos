const fs = require('fs');
const path = require('path');

/**
 * Function to write to a file.
 * @param {string} fullPath - The full path of the file.
 * @param {string} content - The content to write to the file.
 */
function writeFile(fullPath, content) {
    fs.writeFileSync(fullPath, content); // Using writeFileSync for simplicity and better error handling.
    console.log(`Successfully written to ${fullPath}`);
}

// Example usage with full path
const fullPath = path.join(__dirname, 'folder', 'example.txt');
const content = fullPath+'\nHello, this is an example file for Node.js on Windows.';

// Calling the function with the desired parameters
writeFile(fullPath, content);