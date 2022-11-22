function duplicateMenu() {
    // get all of the anchor elements from the top menu
    let topList = document.querySelectorAll('ul#primaryNavigation li a')
    let smallNav = document.querySelector('nav#smallNavArea')
    
    // create new list items for the bottom of the page
    let newList = document.createElement('ul')

    topList.forEach(menuItem => {
        let newLI = document.createElement('li')
        let newLink = document.createElement('a')
        newLink.setAttribute('href', menuItem.getAttribute('href'))
        newLI.innerHTML = `<a href=${newLink}> ${menuItem.innerHTML}</a>`
        newList.appendChild(newLI)
    // append children to make them appear in the DOM
        smallNav.append(newList)
    })
}

duplicateMenu()