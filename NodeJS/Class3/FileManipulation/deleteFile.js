const fs = require('fs');

// Delete the file synchronously
try {
    fs.unlinkSync('example.txt');
    console.log('File deleted successfully (sync).');
} catch (err) {
    console.error('Error deleting file (sync):', err);
}

// const fs = require('fs');
// // Delete the file asynchronously
// fs.unlink('example.txt', (err) => {
//     if (err) {
//         console.error('Error deleting file (async):', err);
//         return;
//     }
//     console.log('File deleted successfully (async).');
// });
