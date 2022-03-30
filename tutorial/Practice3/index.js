// const player = "Per"
// const opponent = "Nick"
// const game = "Amazing Fighter"
// let points = 0
// let hasWon = false

// points += 100
// hasWon = true

// if (hasWon) {
//     console.log(`${player} got ${points} points and won the ${game} game!`)
// } else {
//     console.log(`The winner is ${opponent}! ${player} lost the game`)
// }

// let myCourses = ["Learn CSS animations", "UI design fundamentals", "Intro to clean code"]

// function myCourse (course) {
//     for (let i = 0; i < course.length; i++) {
//         console.log(course[i])
//     }
// }

// myCourse(localOut)

// let localEl = document.getElementById("local-el")

// localEl.addEventListener("click", function () {
//     localStorage.setItem("myStorage", "100")
//     let localOut = localStorage.getItem("myStorage")
//     console.log(localOut)
// })

// let data = [
//     {
//         player : "Jane" ,
//         score : 52
//     },
//     {
//         player : "Mark" ,
//         score : 41
//     }
// ]
// let scoreEl = document.getElementById("score-el")

// scoreEl.addEventListener("click", function(){
//     console.log(data[0].score)
// })

// let description = "largest countries"
// let array = ["China", "India", "USA"]

// function generateSentence (desc, arr) {
//     let baseString = `The ${arr.length} ${desc} are `

//     let lastIndex = arr.length - 1
//     for (let i = 0; i < arr.length; i++) {
//         if (i === lastIndex) {
//             baseString += arr[i]
//         } else {
//             baseString += arr[i] + ", "
//         }
//     }
//     console.log()

//     return baseString
// }

// console.log(generateSentence(description, array))

const images = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

let containerEl = document.getElementById("container")

function render () {
    let imagesDOM = ""

    for (let i = 0; i < images.length; i++) {
        imagesDOM += `<img class="team-img" src="${images[i]}">`
    }

    containerEl.innerHTML = imagesDOM
}

render()