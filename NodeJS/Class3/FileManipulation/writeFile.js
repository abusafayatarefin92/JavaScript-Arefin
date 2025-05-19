//sync mode
const fs = require('fs');
// fs.writeFileSync('file.txt', 'Hello, world!');
fs.appendFileSync('file.txt', '\nHello, world of JS!'); //append file


//asynchronous mode
// const fs2 = require('fs');
// fs2.writeFile('file.txt', 'Hello, world!', (err) => {
//     if (err) throw err;
//     console.log('File has been written!');
// });
