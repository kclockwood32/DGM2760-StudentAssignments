document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "Zees eez Chief Inspector Clouseau you are speaking to"
document.querySelector('main > h1').innerText = "Inspector Clouseau"

function reDisplay() {
let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} tall.`
let offset = `Window offset is ${window.screenX} from the left edge and ${window.screenY} from the top edge.`
let myWindow = document.querySelector('#myWindow').innerText = `${windowSizes}`
let myDocument = document.querySelector('#myDocument').innerText = `${offset}`
}

function getURL() {
    let urlPage = `The URL of this page is: ` + window.location.href
    let myURL = document.querySelector('#myURL').innerText = `${urlPage}`
}

function displayLastModified() {
    let lastModified = `This page was last modified on ` + document.lastModified
    let pageLastModified = document.querySelector('#pageLastModified').innerText = `${lastModified}`
}


getURL()
reDisplay()
displayLastModified()