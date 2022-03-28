let firstName = 'Safayat'
let lastName = 'Arefin'

let fullName = firstName + ' ' + lastName

let name = 'Arefin'
let greeting = 'Hi there'

function whenCalled(){
    let whenCalled = greeting + ', ' + name + '!'
    console.log(whenCalled)
}

let myPoints = 3

function add3Points(){
    myPoints += 3
}

function removePoint(){
    myPoints -= 1
}

errorEl = document.getElementById("error")

function errorMessage(){
    let errorMessage = "Something went wrong, please try again"
    errorEl.innerText = errorMessage
}

let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
sumEl = document.getElementById("sum-el")

function add(){
    let add = num1 + num2
    sumEl.textContent = "Sum: " + add
}

function subtract(){
    let subtract = num1 - num2
    sumEl.textContent = "Sutract: " + subtract
}

function divide(){
    let divide = num1 / num2
    sumEl.textContent = "Divide: " + divide
}

function multiply(){
    let multiply = num1 * num2
    sumEl.textContent = "Multiply: " + multiply
}