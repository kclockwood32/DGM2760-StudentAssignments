function tellStory() {
    nounArray = document.querySelector('#noun')
    nounArray.toLowerCase()
    nounArray.split()
    console.log(nounArray)

    const myStory = `Once upon a time there were four ${nounArray[1]}s named Mark,`
    document.querySelector('#story') = myStory
}