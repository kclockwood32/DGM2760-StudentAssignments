function tellStory() {
    nounString = document.querySelector('#noun').value.toLowerCase().replace(/\n/g, " ");
    nounArray = nounString.split(" ").filter(function (el) {return el != "";})

    adjectiveString = document.querySelector('#adjective').value.toLowerCase().replace(/\n/g, " ");
    adjectiveArray = adjectiveString.split(" ").filter(function (el) {return el != "";})

    verbString = document.querySelector('#verb').value.toLowerCase().replace(/\n/g, " ");
    verbArray = verbString.split(" ").filter(function (el) {return el != "";})

    const myStory = `In a time long past, there were seven ${adjectiveArray[0]} ${nounArray[0]}s. These ${nounArray[0]}s were known as the Stewards of ${nounArray[1]}. 
    One day, three ${adjectiveArray[1]} ${nounArray[2]}s came and ${verbArray[0]}ed right in front of those seven ${adjectiveArray[0]} ${nounArray[0]}s.

    This caused the local ${nounArray[3]}s and ${nounArray[4]}s to ${verbArray[1]} right into the ${adjectiveArray[2]} ${nounArray[5]}. 
    The seven ${adjectiveArray[0]} ${nounArray[0]}s simply couldn't take this absurdity, and ${verbArray[2]}ed right into the ${adjectiveArray[3]} ${nounArray[6]}.

    The end :)`
    document.querySelector('#story').innerText = myStory
}