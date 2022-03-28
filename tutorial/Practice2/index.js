let person = {
    name: "Arefin",
    age: 30,
    country: "Bangladesh"
}

function logData() {
    // per is 36 years old and lives in norway
    let description = person.name + " is " + person.age + " years old and lives in " + person.country
    console.log(description)
}

let age = 0.1

// if (age < 6) {
//     console.log("free")
// } else if (age >= 6 && age <= 17) {
//     console.log("child discount")
// } else if (age >= 18 && age <= 26) {
//     console.log("student discount")
// } else if (age >= 27 && age <= 66) {
//     console.log("full price")
// } else if (age > 66) {
//     console.log("senior citizen discount")
// } else {
//     console.log("Please insert a valid age numeber")
// }

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i])
// }

let hands = ["rock", "paper", "scissor"]

function randomHands () {
    console.log(hands[Math.floor(Math.random() * 3)])
}

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function getFruit () {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎" + " "
        } else {
            orangeShelf.textContent += "🍊" + " "
        }
    }
}