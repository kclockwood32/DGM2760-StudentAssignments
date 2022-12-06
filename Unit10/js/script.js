

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
let hotelTags = document.querySelectorAll("a")
hotelTags.forEach(element => element.addEventListener('click', hotelInfo))

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })
    console.log(hotelChoice)

    document.querySelector("#hotelName").textContent = ` ${hotelChoice.name} Hotel`
    document.querySelector("#rooms").textContent = ` ${hotelChoice.rooms}`
    document.querySelector("#gym").textContent = ` ${hotelChoice.gym}`
    document.querySelector("#type").textContent = ` ${hotelChoice.roomTypes}`
    document.querySelector("#address").textContent = ` ${hotelChoice.address}`
    document.querySelector("#picture").src = ` ${hotelChoice.picture}`
}