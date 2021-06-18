const opitions = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZzoom: false, 
    zoomControl: false
}

//create map
const map = L.map('mapid', opitions).setView([-27.2244003,-49.650684], 15)

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create and add marker
L
.marker([-27.2244003,-49.650684], { icon })
.addTo(map)
