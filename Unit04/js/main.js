function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  function getMonthName(month) {
    let name
    switch (month) {
        case 1:
            name = "January"
            break;
        case 2:
            name = "February"
            break;
        case 3:
            name = "March"
            break;
        case 4:
            name = "April"
            break;
        case 5:
            name = "May"
            break;
        case 6:
            name = "June"
            break;
        case 7:
            name = "July"
            break;
        case 8:
            name = "August"
            break;
        case 9:
            name = "September"
            break;
        case 10:
            name = "October"
            break;
        case 11:
            name = "November"
            break;
        case 12:
            name = "December"
            break;
        default:
            name = "Not a month"
            break;
    }
    return name
  }

  function getFortune(fate) {
    let message
    switch (fate) {
        case 1:
            message = "win exactly 12 dolalrs and thirty eight cents!"
            break;
        case 2:
            message = "be greeted by an old aquaintance that you actually had no interest in ever meeting again."
            break;
        case 3:
            message = "have a beautiful and joy-filled day, wether you like it or not."
            break;
        case 4:
            message = "come to the acute realization that being an adult isn't as cool as you thought it was when you were a kid."
            break;
        case 5:
            message = "suddenly develop an insatiable and surprising craving for Mac n Cheese."
            break;
        default:
            message = "An error has occured."
            break;
    }
    return message
  }

let day = getRandomIntInclusive(1, 30)
let month = getRandomIntInclusive(1, 12)
let fate = getRandomIntInclusive(1, 5)
const monthName = getMonthName(month)
const fortuneMessage = getFortune(fate)

const fortuneRevealed = `On ${monthName} ${day}, you will ${fortuneMessage}`

document.querySelector('#fortune').innerText = fortuneRevealed

console.log(monthName)