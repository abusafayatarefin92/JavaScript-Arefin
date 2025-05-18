const fs = require('fs'); 
const jsonData = require('./students.json'); 

// Create a new user object
const newStudent = {
    id : "1005",
    name : "Tarim",
    class : "10",
    department : "Business Studies"
};

// Add the new user to the existing array of users
jsonData.push(newStudent);

fs.writeFileSync('./students.json', JSON.stringify(jsonData, null, 2)); // Adding null, 2 to prettify the output

console.log(jsonData);
