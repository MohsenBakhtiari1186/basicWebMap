mapboxgl.accessToken = 'pk.eyJ1IjoibW9oc2VuYmFraHRpYXJpMTg2IiwiYSI6ImNscHF6N3ZlazAydnkycW16Y3NsdGxjY2QifQ.1LcdTjWorGzdWeiaEmRuaw';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [0, 0],
    zoom: 2
});

map.on('click', function(e) {
    const coordinates = e.lngLat;
    const lng = coordinates.lng.toFixed(4);
    const lat = coordinates.lat.toFixed(4);
    
    // Update the coordinates display
    document.getElementById('coordinates').innerHTML = 
        `Longitude: ${lng}, Latitude: ${lat}`;
    
    // Show popup with coordinates
    alert(`Coordinates: x=${lng}, y=${lat}`);
    
    // Add a marker at the clicked location
    new mapboxgl.Marker()
        .setLngLat([coordinates.lng, coordinates.lat])
        .addTo(map);
});

function resizeMap() {
    if (window.innerWidth <= 600) {
        map.resize();
    }
}

window.addEventListener('resize', resizeMap);
document.addEventListener('DOMContentLoaded', resizeMap);