// pick a random number between 0 and 16
document.querySelector('header > h1').innerText = "Number Guessing Game"

let correctNumber = Math.floor(Math.random() * 15)



let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 1

console.log(`The correct number is ${correctNumber}`)

function evalGuess() {
    totalGuesses +=1  //totalGuesses is incremented by 1
    gamerGuess = document.querySelector('#guess').value
    console.log(totalGuesses, gamerGuess)

    const feedback = document.querySelector('#feedback')

    if (gamerGuess == correctNumber && totalGuesses < 4) {
        console.log(`gamerGuess is equal to correctNumber`)
        feedback.innerText = 'You win! The golden trophy of Honor and Intellect! Wow!'
        giveAward()
    } else if (gamerGuess == correctNumber && totalGuesses < 7) {
        console.log(`gamerGuess is equal to correctNumber`)
        feedback.innerText = 'You win! The silver trophy of Justice and Reasonable Dignity! Not bad :)'
        giveAward()
    } else if (gamerGuess == correctNumber && totalGuesses < 10) {
    console.log(`gamerGuess is equal to correctNumber`)
    feedback.innerText = 'You win! The bronze trophy of Participation?? Decidedly disappointing :/'
    giveAward()
    }
    else if (gamerGuess > correctNumber && gamerGuess < 16) {
        feedback.innerText = 'Your guess was too high! Try again.'
    } else if (gamerGuess < correctNumber && gamerGuess > 0) {
        feedback.innerText = 'Your guess was too low! Try again.'
    } else {
        feedback.innerText = 'Hey! You must choose a number between 1 and 15. Give it another shot!'
        totalGuesses -= 1
    }

    if (totalGuesses > 9) {
        feedback.innerText = 'Welp, ya lost. Refresh the page to try again.'
    }

    document.querySelector('#attempts').innerText = totalGuesses
}

function giveAward() {
    console.log('Congratulations!')
    let imagePath = '#'
    switch(totalGuesses) {
        case 1:
        case 2:
        case 3:
            imagePath = 'images/gold.png'
            console.log('The golden trophy of Honor and Intellect! Wow!')
            break;
        case 4:
        case 5:
        case 6:
            imagePath = 'images/silver.png'
            console.log('The silver trophy of Justice and Reasonable Dignity! Not bad :)')
            break;
        case 7:
        case 8:
        case 9:
            imagePath = 'images/bronze.png'
            console.log('The bronze trophy of Participation?? Decidedly disappointing :/')
            break;
    }

    const awardImage = document.createElement('img') // Creates an <img> element
    awardImage.setAttribute('src', imagePath)
    const trophy = document.querySelector('#trophy')

    if (trophy.hasChildNodes())
    {

    } else trophy.appendChild(awardImage)
    // only append child if the trophy element does not have any child nodes yet
}