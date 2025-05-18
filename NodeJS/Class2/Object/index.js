let student1 = {
    id:"1001",
    name:"Rahim",
    class:"10",
    department:"science"
};

console.log(student1);
console.log(student1.name);

let student2=[{
    id:"1001",
    name:"Rahim",
    class:"10",
    department:"science"
}, {
    id:"1002",
    name:"Karim",
    class:"10",
    department:"Business Studies"
}];

console.log(student2[0]);
console.log(student2[1]);

// Define the student object
var student3 = {
    id: "1003",
    studentName: {
        firstName : "Abu Safayat",
        lastName : "Arefin"
    },
    studentClass: "10",
    department: "Arts"
};

// Destructure the object properties
const { id, studentName, studentClass, department } = student3;
const {firstName, lastName} = studentName;

console.log(`Id: ${id}`);
// console.log(`Name: ${studentName}`);
console.log(`Class: ${studentClass}`);
console.log(`Department: ${department}`);
console.log(`First Name: ${firstName}`);

const {student} = require('./students');
console.log(student[0].name);

const student4 = require('./export');
console.log(student4[1].name);

const jsonFile = require('./students.json');
console.log(jsonFile[2].name);