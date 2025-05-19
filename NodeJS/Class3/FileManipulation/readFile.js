//Synchronous mode
const fs = require('fs');
const data = fs.readFileSync('file.txt', 'utf8'); // 'utf8' ensures the file is read as a string
console.log('Synchronous read:\n' + data);

// const fs = require('fs');

// Read the file asynchronously
// fs.readFile('file.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('Asynchronous read:', data);
// });
