document.querySelector('header > h1').innerText = "Capstone Project"
document.querySelector('header > h2').innerText = "Proof of Skills Gained"

function displayLastModified() {
    let lastModified = `This page was last modified on ` + document.lastModified
    let pageLastModified = document.querySelector('#pageLastModified').innerText = `${lastModified}`
}

displayLastModified()

//game organizer
function generateCharacters() {
    nameString = document.querySelector('#names').value.toLowerCase().replace(/\n/g, " ");
    nameArray = nameString.split(" ").filter(function (el) {return el != "";})
    nameLength = nameArray.length

    classString = document.querySelector('#class').value.toLowerCase().replace(/\n/g, " ");
    classArray = classString.split(" ").filter(function (el) {return el != "";})
    classLength = classArray.length

    adjectiveArray = ["mighty", "trusty", "feeble", "simple", "delicate", "weathered", "fearsome", "triumphant", "jubilant", "questionable", "wicked", "holy", "sacred", "loathesome", "heavy", "battle", "agile", "fragile"]
    adjectiveLength = adjectiveArray.length

    weaponString = document.querySelector('#weapon').value.toLowerCase().replace(/\n/g, " ");
    weaponArray = weaponString.split(" ").filter(function (el) {return el != "";})
    weaponLength = weaponArray.length

    const characterGen = `In this adventure, ${nameArray[getRandomInt(0, nameLength)]} is a ${classArray[getRandomInt(0, classLength)]} who wields the ${adjectiveArray[getRandomInt(0, adjectiveLength)]} ${weaponArray[getRandomInt(0, weaponLength)]}.`
    document.querySelector('#generate').innerText = characterGen
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }