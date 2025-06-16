import shell from 'shelljs';

const addParams = process.argv;
let file = '';
let timeOut = 30000; //Default timeout

// Check for 'file' argument
if (addParams[2] === 'file' && addParams[3]) {
    file += addParams[3];
}

// Check if '--timeout' is passed as an argument
const timeOutIndex = addParams.indexOf('--timeOut');
if (timeOutIndex > -1 && addParams[timeOutIndex + 1]) {
    timeOut = addParams[timeOutIndex + 1];
}

// Execute Mocha test with file and timeout
// shell.exec(`npx mocha --timeout=${timeOut} --colors ${file}`);
shell.exec(
    `npx mocha --timeout=${timeOut} --colors ${file} --reporter mochawesome --reporter-options reportDir=./mochawesome-report,reportFilename=index,overwrite=true,html=true,json=false`
);

