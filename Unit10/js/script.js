

async function getHotelData() {
    try {
        const response = await fetch('hotel.json')
        return await response.json() // Return the JSON object

    } catch (error) {
        console.error(error)
    }
}

let hotelData = {}
getHotelData().then(data => hotelData = data)

// store in a variable
// use that variable to loop over each element and addEventListener to each one
// I suggest using forEach loop
document.querySelectorAll("a")
document.querySelector("#marriott").addEventListener('click', hotelInfo)

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })
    console.log(hotelChoice)

    document.querySelector("#hotelName").textContent = `${hotelChoice.name} Hotel`
}