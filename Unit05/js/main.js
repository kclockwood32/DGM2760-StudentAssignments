// Create an array with 4 trees listed
const trees = ['oak', 'Pine', 'aspen', 'Bald Cypress']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

// Display the list of trees inside displayResults div
const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span>${trees.length} elements long</span>`
}

// Add a redwood tree to end of list
listTrees()

document.querySelector('#add_redwood').onclick = () => {
    trees.push('redwood')
    listTrees()
}

// Add a Pear to start of list
document.querySelector('#add_pear').onclick = () => {
    trees.unshift('Pear')
    listTrees()
}

// Remove the first tree in the list
document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0) {
        trees.shift()
        listTrees()
    } else {
        errorElement.textContent = 'Cannot remove the first tree because there are no trees to remove.'
    }
}

// Remove the second tree in the list
document.querySelector('#remove_tree2').onclick = () => {
    if (trees.length > 1) {
        trees.splice(1,1)
        listTrees()
    } else {
        errorElement.textContent = 'Cannot remove second tree when only one tree exists.'
    }
}

// Remove the last tree in the list
document.querySelector('#remove_treeLast').onclick = () => {
    if (trees.length > 0) {
        trees.pop()
        listTrees()
    } else {
        errorElement.textContent = 'Cannot remove the last tree because there are no trees to remove.'
    }
    
}

// Sort trees A>Z
document.querySelector('#sortTrees').onclick = () => {
    trees.sort((a, b)=>{
        if(a.toLowerCase() > b.toLowerCase()){
          return 1;
        }else{
          return -1;
        }
      });
    listTrees()
}

// Make all trees lower-case
document.querySelector('#lowerTrees').onclick = () => {
    const lowerCased = trees.map(tree => tree.toLowerCase())
    console.log(lowerCased)
    listTrees()
}

document.querySelector('#lowerTrees').onclick = () => {
    trees.lowerCased()
    listTrees()
}

//Retrieve the name of the specified tree from the list
document.querySelector('#showName3').onclick = () => {
    document.querySelector('#treeName').innerText = `The name of the third tree in the list is ${trees[2]}.`
    listTrees()
}

document.querySelector('#showName4').onclick = () => {
    document.querySelector('#treeName').innerText = `The name of the third tree in the list is ${trees[3]}.`
    listTrees()
}